import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
import styles from './header.module.css';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const navLinks = [
    {
        name: "Discover Shija",
        icon: <FaAngleDown />,
        dropdown: [
            {
                name: "The Shija Story",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Overview", path: "/overview" },
                    { name: "Vision & Mission", path: "/vision&mission" },
                    { name: "Leaderships", path: "/leaderships" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                    { name: "Achievements", path: "/achievements" },
                    { name: "Careers", path: "/careers" },
                ],
            },
            {
                name: "Leadership",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Board of Direstors", path: "/directors" },
                ],
            },
            {
                name: "Academics & Research",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Shija Knowledge", path: "/shija_knowledge" },
                ],
            },
            {
                name: "Media Centre",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Shija in the News", path: "/media-page" },
                    { name: "Press Releases", path: "/press_releases" },
                    { name: "Events", path: "/events" },
                    { name: "Media Gallery", path: "/media_gallery" },
                ],
            },
        ],
    },
    {
        name: "Specialities",
        icon: <FaAngleDown />,
        dropdown: [
            {
                name: "Downloads",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Overview", path: "/overview" },
                    { name: "Vision & Mission", path: "/vision&mission" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                ],
            },
            {
                name: "Gallery",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Overview", path: "/overview" },
                    { name: "Vision & Mission", path: "/vision&mission" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                ],
            },
        ],
    },
    { name: "SHRI", path: "/" },
    {
        name: "Medical Services",
        icon: <FaAngleDown />,
        dropdown: [
            {
                name: "Center of Excellence & Specialists",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Overview", path: "/overview" },
                    { name: "Vision & Mission", path: "/vision&mission" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                ],
            },
            {
                name: "Book Appointment",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            {
                name: "Find Doctor",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            {
                name: "Book Health Check",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            {
                name: "Book Home Care",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
        ],
    },
    {
        name: "Health Library",
        icon: <FaAngleDown />,
        dropdown: [
            {
                name: "Diseases & Conditions",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Brain Cancer", path: "/brain_cancer" },
                ],
            },
            {
                name: "Treatments & Procedures",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            {
                name: "Symptoms Guide",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            {
                name: "Health Technology",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            {
                name: "Medicines",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            {
                name: "Diagnostics & Reports",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
        ],
    },
];

export default function ShijaHeader() {
    const [expanded, setExpanded] = useState(false);
    const [navbarBg, setNavbarBg] = useState("transparent");
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
    const toggleNavbar = () => setExpanded((prev) => !prev);
    const closeNavbar = () => setExpanded(false);
    const [navbarLinks, setNavbarLinks] = useState("#ffffff");
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isSmallScreen) {
            setNavbarBg("rgba(0, 0, 0, 0)");
            setNavbarLinks("#6b1d20");
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg("#fff");
                setNavbarLinks("#6b1d20");
            } else {
                if (isHomePage) {
                    setNavbarBg("rgba(0, 0, 0, 0)");
                    setNavbarLinks("#ffffff");
                    return;
                } else {
                    setNavbarBg("#fff");
                    setNavbarLinks("#6b1d20");
                    return;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSmallScreen, isHomePage]);

    return (
        <Navbar
            className={`navbar ${styles['navbarStyles']}`}
            expand="lg"
            fixed="top"
            expanded={expanded}
            onMouseEnter={
                isHomePage && !isSmallScreen
                    ? () => {
                        setNavbarBg("#fff");
                        setNavbarLinks("#6b1d20");
                    }
                    : undefined
            }
            onMouseLeave={
                isHomePage && !isSmallScreen
                    ? () => {
                        if (window.scrollY <= 50) {
                            setNavbarBg("rgba(0,0,0,0)");
                            setNavbarLinks("#ffffff");
                        }
                    }
                    : undefined
            }
            style={{
                transition: "background-color 0.3s ease-in-out",
                backgroundColor: isSmallScreen ? "#fff" : navbarBg,
            }}
        >
            <Navbar.Brand className="d-lg-none" as={Link} to="/" onClick={closeNavbar}>
                SHRI
            </Navbar.Brand>
            <Navbar.Toggle
                className="ms-auto p-0 bg-transparent border-0 shadow-none focus-shadow-none"
                aria-controls="navbarNav"
                onClick={toggleNavbar}
                style={{ border: "none", outline: "none", boxShadow: "none" }}
            >
                {expanded ? (
                    <FaTimes size={"24px"} color="#6b1d20" />
                ) : (
                    <FaBarsStaggered size={"24px"} color="#6b1d20" />
                )}
            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className={`${styles["nav-styles"]}`}>
                    {navLinks.map((link, index) => {
                        if (isSmallScreen && link.name === "SHRI") return null;
                        return link.dropdown ? (
                            <NavDropdown
                                key={index}
                                drop={isSmallScreen ? "end" : "down"}
                                title={
                                    <span style={{ color: navbarLinks }}>
                                        {link.name}&nbsp;{link.icon}
                                    </span>
                                }
                                id={`${link.name.toLowerCase()}-dropdown`}
                                show={hoveredDropdown === index}
                                onMouseEnter={() => {
                                    if (!isSmallScreen) {
                                        setHoveredDropdown(index);
                                        setHoveredSubMenu(`${index}-0`);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (!isSmallScreen) {
                                        setHoveredDropdown(null);
                                        setHoveredSubMenu(null);
                                    }
                                }}
                                onClick={() => {
                                    if (isSmallScreen) {
                                        setHoveredDropdown(
                                            hoveredDropdown === index ? null : index
                                        );
                                    }
                                }}
                                style={{ fontSize: "1rem" }}
                            >
                                {isSmallScreen && (
                                    <div className="dropdown-back-btn" onClick={() => setHoveredDropdown(null)}>
                                        <FaArrowLeft className="me-2" />
                                        Back
                                    </div>
                                )}
                                {link.dropdown.map((item, idx) =>
                                    item.subDropdown ? (
                                        <NavDropdown
                                            key={idx}
                                            drop={isSmallScreen ? "down" : "end"}
                                            title={
                                                <span className="d-flex justify-content-between align-items-center">
                                                    {item.name}
                                                    <FaAngleRight />
                                                </span>
                                            }
                                            className="nested-dropdown"
                                            show={
                                                isSmallScreen
                                                    ? hoveredSubMenu === `${index}-${idx}`
                                                    : hoveredSubMenu === `${index}-${idx}` || hoveredSubMenu === `${index} - 0`
                                            }
                                            onMouseEnter={() => {
                                                if (!isSmallScreen) {
                                                    setHoveredSubMenu(`${index}-${idx}`)
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                if (!isSmallScreen) {
                                                    setHoveredSubMenu(`${index} - 0`)
                                                }
                                            }}
                                        >
                                            {item.subDropdown.map((subItem, subIdx) => (
                                                <NavDropdown.Item
                                                    key={subIdx}
                                                    as={Link}
                                                    to={subItem.path}
                                                    onClick={closeNavbar}
                                                >
                                                    {subItem.name}
                                                </NavDropdown.Item>
                                            ))}
                                        </NavDropdown>
                                    ) : (
                                        <NavDropdown.Item
                                            key={idx}
                                            as={Link}
                                            to={item.path}
                                            onClick={closeNavbar}
                                            className="d-flex justify-content-between align-items-center"
                                        >
                                            {item.name}&nbsp;{item.icon}
                                        </NavDropdown.Item>
                                    )
                                )}
                            </NavDropdown>
                        ) : (
                            <Nav.Link
                                key={index}
                                as={Link}
                                to={link.path}
                                onClick={closeNavbar}
                                style={{ fontSize: "1rem", color: navbarLinks }}
                            >
                                {link.name}
                            </Nav.Link>
                        );
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
