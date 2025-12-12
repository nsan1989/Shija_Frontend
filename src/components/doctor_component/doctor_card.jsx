import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaPhone } from "react-icons/fa6";
import styles from './doctor_card.module.css';

export default function DoctorCard() {
    return (
        <Row className='m-0'>
            <Col md={6} lg={3} className={styles.cardWrapperStyles}>
                <a href='/profile'>
                    <Card className={styles.cardStyle}>
                        <Card.Img variant="top" src="holder.js/100px180" alt='Doctor Image' />
                        <Card.Body>
                            <Card.Title>Doctor Name</Card.Title>
                            <Card.Text>
                                Short description about the doctor.
                            </Card.Text>
                            <div className="d-flex align-items-center justify-content-start gap-4">
                                <FaPhone />
                                <Button variant="outline-primary">Book Appointment</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        </Row>
    )
}
