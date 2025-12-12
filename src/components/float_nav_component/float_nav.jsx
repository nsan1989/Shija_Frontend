import { Container, Row, Col } from 'react-bootstrap';
import { SlCalender } from "react-icons/sl";
import { FaUserDoctor, FaStethoscope, FaHandHoldingHeart } from "react-icons/fa6";
import styles from './float_nav.module.css';

const navItems = [
    { title: 'Book an Appointment', icons: <SlCalender />, link: '' },
    { title: 'Second Opinion', icons: <FaUserDoctor />, link: '' },
    { title: 'Health Checkup', icons: <FaStethoscope />, link: '' },
    { title: 'Home Care', icons: <FaHandHoldingHeart />, link: '' },
];

export default function FloatNav() {
    return (
        <div className={`${styles.floatNavWrapperStyle} d-none d-lg-flex w-100`}>
            <Container>
                <div className="grid-wrapper">
                    <Row className='d-flex rounded-5 overflow-hidden'>
                        {navItems.map((item, index) => (
                            <Col lg={3} className={`${styles.floatNavStyle} border-end`} key={index}>
                                <a href='{item.link}'>
                                    <div className="d-flex justify-content-evenly">
                                        <div>
                                            {item.icons}
                                        </div>
                                        <div>
                                            {item.title}
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}
