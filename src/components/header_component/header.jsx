import { useState, useEffect, useRef } from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { MegaMenu } from "./mega_menu";
import styles from "./header.module.css";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/icons/logo.png";

export default function ShijaHeader() {
    const [activeMegaIndex, setActiveMegaIndex] = useState(null);
    const [activeFirstIndex, setActiveFirstIndex] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const closeTimer = useRef(null);

    /* Scroll effect */
    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.5;
            setScrolled(window.scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Screen size detection */
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Navbar
            expand="md"
            fixed="top"
            className={`p-0 ${styles.navbarWrapperStyles} ${scrolled ? styles.navbarScrolled : styles.navbarTransparent
                }`}
        >
            <Container>
                <Navbar.Brand className="d-md-none">SHRI</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className={styles.navItemsWrapperStyles}>
                        {MegaMenu.map((item, index) => (
                        <div key={index} className={styles.megaMenuWrapper}>
                            {/* Top-level menu */}
                            <Nav.Link
                                className={styles.navLink}
                                onMouseEnter={() => {
                                    if (!isMobile) {
                                        clearTimeout(closeTimer.current);
                                        setActiveMegaIndex(index);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (!isMobile) {
                                        closeTimer.current = setTimeout(() => {
                                            setActiveMegaIndex(null);
                                            setActiveFirstIndex(null);
                                        }, 180);
                                    }
                                }}
                                onClick={() => {
                                    if (isMobile) {
                                        setActiveMegaIndex(index);
                                        setActiveFirstIndex(null);
                                    }
                                }}
                            >
                                {item.name}
                            </Nav.Link>

                            {/* Mega Menu */}
                            {item.firstSubMenu && (
                                <div
                                    className={`${styles.megaMenuFrame} ${activeMegaIndex === index ? styles.megaActive : ""
                                        }`}
                                    onMouseEnter={() => {
                                        if (!isMobile) {
                                            clearTimeout(closeTimer.current);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (!isMobile) {
                                            closeTimer.current = setTimeout(() => {
                                                setActiveMegaIndex(null);
                                                setActiveFirstIndex(null);
                                            }, 180);
                                        }
                                    }}
                                >
                                    {/* FIRST SUB MENU */}
                                    {(isMobile || !isMobile) && (
                                        <div className={styles.firstSubMenu}>
                                            {isMobile && activeFirstIndex === null && (
                                                <div className={styles.backHeader} onClick={() => setActiveMegaIndex(null)}>
                                                    <FaArrowLeft /> <span>{item.name}</span>
                                                </div>
                                            )}
                                            {item.firstSubMenu.map((firstItem, firstIndex) => (
                                                <div
                                                    key={firstIndex}
                                                    className={styles.firstSubMenuItem}
                                                    onClick={() => setActiveFirstIndex(firstIndex)}
                                                >
                                                    {firstItem.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* SECOND SUB MENU */}
                                    {(!isMobile && activeFirstIndex === null ? item.firstSubMenu[0] : item.firstSubMenu[activeFirstIndex])?.secondSubMenu && (
                                        <div className={styles.secondSubMenu}>
                                            {isMobile && activeFirstIndex !== null && (
                                                <div className={styles.backHeader} onClick={() => setActiveFirstIndex(null)}>
                                                    <FaArrowLeft />
                                                    <span>{item.firstSubMenu[activeFirstIndex]?.name}</span>
                                                </div>
                                            )}
                                            {((!isMobile && activeFirstIndex === null ? item.firstSubMenu[0] : item.firstSubMenu[activeFirstIndex])?.secondSubMenu || []).map(
                                                (secondItem, secondIndex) => (
                                                    <Nav.Link
                                                        key={secondIndex}
                                                        href={secondItem.path}
                                                        className={styles.secondSubMenuItem}
                                                    >
                                                        {secondItem.name}
                                                    </Nav.Link>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
