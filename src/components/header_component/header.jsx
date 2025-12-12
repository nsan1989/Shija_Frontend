import { useEffect, useState } from 'react'
import HeaderWrapper from './header_wrapper';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 992 && window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <Navbar expand='lg' className={`navbar-wrapper py-3 ${styles["navbar-wrapper-styles"]} ${isFixed ? styles["fixed-styles"] : styles[""]}`}>
            <Container>
                <Navbar.Brand href='/' className='d-lg-none'>Shija</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-collapse'></Navbar.Toggle>
                <Navbar.Collapse id='navbar-collapse'>
                    <Nav className='d-flex justify-content-evenly w-100'>
                        <HeaderWrapper
                            drop='down' 
                            title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Discover Shija&nbsp;<FaAngleDown size={16} />
                                </span>
                            } 
                            id='discover-shija'>
                            <HeaderWrapper 
                            drop='end' 
                            className='100vw border'
                            title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    The Shija Story&nbsp;<FaAngleRight size={16} />
                                </span>
                            }  
                            id='shija-story'>
                                <NavDropdown.Item><Link target='' to="/company-overview">Overview</Link></NavDropdown.Item>
                                <NavDropdown.Item href=''>Vision & Mission</NavDropdown.Item>
                                <NavDropdown.Item href=''>Achievements & Milestones</NavDropdown.Item>
                                <NavDropdown.Item href=''>Career</NavDropdown.Item>
                            </HeaderWrapper>
                            <HeaderWrapper
                            drop='end' 
                            title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Leadership&nbsp;<FaAngleRight size={16} />
                                </span>
                            }  
                            id='leadership'>
                                <NavDropdown.Item href=''>Leader - 1</NavDropdown.Item>
                                <NavDropdown.Item href=''>Leader - 2</NavDropdown.Item>
                                <NavDropdown.Item href=''>Leader - 3</NavDropdown.Item>
                                <NavDropdown.Item href=''>Leader - 4</NavDropdown.Item>
                            </HeaderWrapper>
                            <HeaderWrapper 
                            drop='end' 
                            title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Academic & Research&nbsp;<FaAngleRight size={16} />
                                </span>
                            }  
                            id='academic-research'>
                                <NavDropdown.Item href=''>SAHS</NavDropdown.Item>
                                <NavDropdown.Item href=''>SAN</NavDropdown.Item>
                                <NavDropdown.Item href=''>SPRA</NavDropdown.Item>
                                <NavDropdown.Item href=''>DMV</NavDropdown.Item>
                            </HeaderWrapper>
                            <HeaderWrapper 
                            drop='end' 
                            title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Media Centre&nbsp;<FaAngleRight size={16} />
                                </span>
                            }  
                            id='media-centre'>
                                <NavDropdown.Item href=''>Shija in the News</NavDropdown.Item>
                                <NavDropdown.Item href=''>Press Releases</NavDropdown.Item>
                                <NavDropdown.Item href=''>Events</NavDropdown.Item>
                                <NavDropdown.Item href=''>Media Gallery</NavDropdown.Item>
                                <NavDropdown.Item href=''>Media Contacts</NavDropdown.Item>
                            </HeaderWrapper>
                        </HeaderWrapper>
                        <HeaderWrapper 
                        title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Speciality&nbsp;<FaAngleDown size={16} />
                                </span>
                        }  
                        id='speciality'>
                            <NavDropdown.Item href=''>Overview</NavDropdown.Item>
                        </HeaderWrapper>
                        <Navbar.Brand href='/' className='d-none d-lg-flex'>Shija</Navbar.Brand>
                        <HeaderWrapper 
                        title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Medical Services&nbsp;<FaAngleDown size={16} />
                                </span>
                        }  
                        id='medical-services'>
                            <NavDropdown.Item href=''>Centres of Excellence & Specailities</NavDropdown.Item>
                            <NavDropdown.Item href=''>Book and Appointment</NavDropdown.Item>
                            <NavDropdown.Item href=''>Find a Doctor</NavDropdown.Item>
                            <NavDropdown.Item href=''>Book Health Check</NavDropdown.Item>
                            <NavDropdown.Item href=''>Preventive Health</NavDropdown.Item>
                        </HeaderWrapper>
                        <HeaderWrapper 
                        title={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    Health Library&nbsp;<FaAngleDown size={16} />
                                </span>
                        }  
                        id='health-library'>
                            <NavDropdown.Item><Link target='' to="/diseases-and-conditions">Diseases and Conditions</Link></NavDropdown.Item>
                            <NavDropdown.Item href=''>Treatments & Procedures</NavDropdown.Item>
                            <NavDropdown.Item href=''>Symptoms Guide</NavDropdown.Item>
                            <NavDropdown.Item href=''>Health Technology</NavDropdown.Item>
                            <NavDropdown.Item href=''>Medicines</NavDropdown.Item>
                            <NavDropdown.Item href=''>Diagnostics & Tests</NavDropdown.Item>
                        </HeaderWrapper>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
