import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image, Button, NavDropdown } from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
import styles from './header.module.css';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

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
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                ],
            },
            { 
                name: "Leadership", 
                icon: <FaAngleRight />, 
                subDropdown: [
                    { name: "Overview", path: "/overview" },
                    { name: "Vision & Mission", path: "/vision&mission" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                ], 
            },
            { 
                name: "Academics & Research", 
                icon: <FaAngleRight />, 
                subDropdown: [
                    { name: "Overview", path: "/overview" },
                    { name: "Vision & Mission", path: "/vision&mission" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
                ], 
            },
            { 
                name: "Media Centre", 
                icon: <FaAngleRight />, 
                subDropdown: [
                    { name: "Overview", path: "/overview" },
                    { name: "Vision & Mission", path: "/vision&mission" },
                    { name: "Awards & Accolades", path: "/awards&accolades" },
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
                path: "",
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ],
            },
            { 
                name: "Find Doctor", 
                path: "",
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ], 
            },
            { 
                name: "Book Health Check", 
                path: "",
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ], 
            },
            { 
                name: "Book Home Care", 
                path: "",
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
                name: "Admission", 
                path: "",
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ], 
            },
            { 
                name: "Course", 
                path: "",
                subDropdown: [
                    { name: "Demo", path: "/demo" },
                ], 
            },
        ],
    },
];

export default function Header() {
    const [expanded, setExpanded] = useState(false);
    const [navbarBg, setNavbarBg] = useState("transparent");
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const [navbarLinks, setNavbarLinks] = useState("#ffffff");
    const [isSmallScreen, setIsSmallScreen] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
    const toggleNavbar = () => setExpanded((prev) => !prev);
    const closeNavbar = () => setExpanded(false);

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
                setNavbarBg("rgba(0, 0, 0, 0)");
                setNavbarLinks("#ffffff");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSmallScreen]);

    return (
        <Navbar
            className={`navbar ${styles['navbarStyles']}`}
            expand="lg"
            fixed="top"
            expanded={expanded}
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
                                onMouseEnter={() => !isSmallScreen && setHoveredDropdown(index)}
                                onMouseLeave={() => !isSmallScreen && setHoveredDropdown(null)}
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