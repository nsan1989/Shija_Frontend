import { Container, Row, Col } from 'react-bootstrap';
import { SlCalender } from "react-icons/sl";
import { FaUserDoctor, FaStethoscope, FaHandHoldingHeart } from "react-icons/fa6";
import { TbReport } from "react-icons/tb";
import styles from './float_nav.module.css';
import { Link } from 'react-router-dom';

const navItems = [
    { title: 'Book an Appointment', icons: <SlCalender />, link: 'http://103.72.216.194:8001/PatientPortal/TentativeAppointment/TentativeAppointment' },
    { title: 'Report', icons: <TbReport />, link: 'http://103.72.216.194:9000/shijareport/' },
    { title: 'Health Checkup', icons: <FaStethoscope />, link: '' },
    { title: 'Home Care', icons: <FaHandHoldingHeart />, link: '' },
];

export default function FloatNav() {

    const handleClick = (e, link) => {
        const isExternal = link.startsWith("http");

        if (isExternal) {
            const proceed = window.confirm("You are about to visit an external link. Would you like to continue?");
            if (!proceed) {
                e.preventDefault();
            }
        }
    };

    return (
        <div className={`${styles.floatNavWrapperStyle} d-none d-lg-flex w-100`}>
            <Container>
                <div className="grid-wrapper">
                    <Row className='d-flex rounded-5 overflow-hidden'>
                        {navItems.map((item, index) => (
                            <Col lg={3} className={`${styles.floatNavStyle} border-end`} key={index}>
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleClick(e, item.link)}
                                >
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
