import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { MegaMenu } from "./mega_menu";
import styles from "./header.module.css";

export default function ShijaHeader() {

    const [activeFirstIndex, setActiveFirstIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.5;
            setScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            expand="md"
            fixed="top"
            className={`p-0 ${styles.navbarWrapperStyles} ${
                scrolled ? styles.navbarScrolled : styles.navbarTransparent
            }`}
        >
            <Container>
                <Navbar.Brand className="d-md-none" href="">SHRI</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className={`nav-items-wrapper p-0 ${styles.navItemsWrapperStyles}`}>
                        {MegaMenu.map((item, index) => (
                            <div key={index} className={styles.megaMenuWrapper}>
                                {/* Top Level Menu */}
                                <Nav.Link
                                    className={`pb-0 ${styles['navLink']}`}
                                    onMouseLeave={() => setActiveFirstIndex(0)}
                                >
                                    {item.name}
                                </Nav.Link>
                                {/* Mega Menu */}
                                {item.firstSubMenu && (
                                    <div className={styles.megaMenuFrame}>

                                        {/* First Sub Menu */}
                                        <div className={styles.firstSubMenu}>
                                            {item.firstSubMenu.map((firstItem, firstIndex) => (
                                                <div
                                                    key={firstIndex}
                                                    className={`${styles.firstSubMenuItem} ${activeFirstIndex === firstIndex
                                                        ? styles.active
                                                        : ""
                                                        }`}
                                                    onClick={() => setActiveFirstIndex(firstIndex)}
                                                >
                                                    {firstItem.name}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Second Sub Menu */}
                                        <div className={styles.secondSubMenu}>
                                            {item.firstSubMenu[activeFirstIndex]?.secondSubMenu?.map(
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
