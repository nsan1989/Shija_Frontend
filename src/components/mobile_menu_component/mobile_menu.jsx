import { Container, Row, Col } from 'react-bootstrap'
import { FaStethoscope, FaPhoneVolume } from "react-icons/fa6";
import { FaUserMd } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import styles from './mobile_menu.module.css'

export default function MobileMenu() {
    return (
        <div className={`mobile-menu-wrapper d-lg-none bg-light ${styles[`mobile-menu-wrapper-styles`]}`}>
            <Container>
                <Row className='d-flex justify-content-between align-items-center py-2'>
                    <Col className={`menu-wrapper ${styles['menu-wrapper-styles']}`}>
                        <a className="menu-links d-flex flex-column justify-content-center align-items-center">
                            <div className='mb-2'>
                                <FaUserMd />
                            </div>
                            <div className={`m-0 ${styles.menuTitleStyle}`}>Doctors</div>
                        </a>
                    </Col>
                    <Col className={`menu-wrapper ${styles['menu-wrapper-styles']}`}>
                        <a className="menu-links d-flex flex-column justify-content-center align-items-center">
                            <div className='mb-2'>
                                <SlCalender />
                            </div>
                            <div className={`m-0 ${styles.menuTitleStyle}`}>Book Apt.</div>
                        </a>
                    </Col>
                    <Col className={`menu-wrapper ${styles['menu-wrapper-styles']}`}>
                        <a className="menu-links d-flex flex-column justify-content-center align-items-center">
                            <div className='mb-2'>
                                <FaStethoscope />
                            </div>
                            <div className={`m-0 ${styles.menuTitleStyle}`}>Check</div>
                        </a>
                    </Col>
                    <Col className={`menu-wrapper ${styles['menu-wrapper-styles']}`}>
                        <a className="menu-links d-flex flex-column justify-content-center align-items-center">
                            <div className='mb-2'>
                                <FaPhoneVolume />
                            </div>
                            <div className={`m-0 ${styles.menuTitleStyle}`}>CallBack</div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
