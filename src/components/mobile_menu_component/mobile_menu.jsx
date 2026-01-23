import { Container, Row, Col } from 'react-bootstrap'
import { FaStethoscope, FaPhoneVolume } from "react-icons/fa6";
import { FaUserMd } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import styles from './mobile_menu.module.css';

const navItems = [
    { title: 'Doctors', icons: <FaUserMd />, link: '' },
    { title: 'Book Apt.', icons: <SlCalender />, link: 'http://103.72.216.194:8001/PatientPortal/TentativeAppointment/TentativeAppointment' },
    { title: 'Check', icons: <FaStethoscope />, link: '' },
    { title: 'Callback', icons: <FaPhoneVolume />, link: '' },
];

export default function MobileMenu() {
    return (
        <div className={`mobile-menu-wrapper d-lg-none ${styles[`mobile-menu-wrapper-styles`]}`}>
            <Container>
                <Row className='d-flex justify-content-between align-items-center py-2'>
                    {navItems.map((items, index) => (
                        <Col key={index} className={`menu-wrapper ${styles['menu-wrapper-styles']}`}>
                            <a href={items.link} className="menu-links d-flex flex-column justify-content-center align-items-center">
                                <div className='mb-2'>
                                    {items.icons}
                                </div>
                                <div className={`m-0 ${styles.menuTitleStyle}`}>{items.title}</div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
