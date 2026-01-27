import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
import styles from './header.module.css';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
/* --api's-- */
import useCoeData from '../../api/coe_api';

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
                    { name: "Anthem", path: "" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                    { name: "Achievements", path: "/achievements" },
                    { name: "Day at Apollo", path: "" },
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
                    { name: "SAHS", path: "" },
                    { name: "SAN", path: "" },
                    { name: "SPRA", path: "" },
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
                    { name: "Media Contacts", path: "/media_contacts" },
                ],
            },
        ],
    },
    {
        name: "Specialities",
        icon: <FaAngleDown />,
        dropdown: [
            {
                name: "Centres of Excellence & Specialties",
                icon: <FaAngleRight />,
                subDropdown: [
                    { name: "Anaesthesiology and Critical Care", path: "" },
                    { name: "ENT", path: "" },
                    { name: "General and Laparoscopic Surgery", path: "" },
                    { name: "Kidney Sciences", path: "" },
                    { name: "NeuroSciences", path: "" },
                    { name: "Nursing Care", path: "" },
                    { name: "Orthopaedics", path: "" },
                    { name: "Plastic and Reconstructive Surgery", path: "" },
                ],
            },
            {
                name: "Find Doctor by Speciality",
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
                name: "Second Opinion",
                icon: "",
                path: "",
            },
            {
                name: "Book Appointment",
                icon: "",
                path: "",
            },
            {
                name: "Lab Test & Diagnostics",
                icon: "",
                path: "",
            },
            {
                name: "Health Check",
                icon: "",
                path: "",
            },
            {
                name: "Home Care",
                icon: "",
                path: "",
            },
            {
                name: "Emergency",
                icon: "",
                path: "",
            },
        ],
    },
    {
        name: "Health Library",
        icon: <FaAngleDown />,
        dropdown: [
            {
                name: "Health Library",
                icon: "",
                path: "",
            },
            {
                name: "Treatments",
                icon: "",
                path: "",
            },
            {
                name: "Technologies",
                icon: "",
                path: "",
            },
            {
                name: "Ailments",
                icon: "",
                path: "",
            },
            {
                name: "Knowledge Center",
                icon: "",
                path: "",
            },
            {
                name: "Downloads",
                icon: "",
                path: ""
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
            expand="md"
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
            <Navbar.Brand className="d-md-none" as={Link} to="/" onClick={closeNavbar}>
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
                                className="first-dropdown"
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
                                    <div
                                        onClick={() => {
                                            setHoveredDropdown(null);
                                            setHoveredSubMenu(null);
                                        }}
                                    >
                                        <FaArrowLeft className="me-2" />
                                        Back
                                    </div>
                                )}
                                {link.dropdown.map((item, idx) =>
                                    item.subDropdown ? (
                                        <NavDropdown
                                            className="second-dropdown"
                                            key={idx}
                                            drop={isSmallScreen ? "down" : "end"}
                                            title={
                                                <span className="d-flex justify-content-between align-items-center">
                                                    {item.name}
                                                    <FaAngleRight />
                                                </span>
                                            }
                                            show={hoveredSubMenu === `${index}-${idx}`}
                                            onClick={(e) => {
                                                if (isSmallScreen) {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setHoveredSubMenu(
                                                        hoveredSubMenu === `${index}-${idx}` ? null : `${index}-${idx}`
                                                    );
                                                }
                                            }}
                                            onMouseEnter={() => {
                                                if (!isSmallScreen) {
                                                    setHoveredSubMenu(`${index}-${idx}`)
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                if (!isSmallScreen) {
                                                    setHoveredSubMenu(null)
                                                }
                                            }}
                                        >
                                            {isSmallScreen && (
                                                <div className="dropdown-back-btn" onClick={() => setHoveredSubMenu(null)} >
                                                    <FaArrowLeft className="me-2" />
                                                    Back
                                                </div>
                                            )}
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
