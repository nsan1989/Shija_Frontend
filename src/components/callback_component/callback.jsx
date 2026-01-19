import { useState } from "react";
import { Row, Col, Form, Image, InputGroup, Button } from "react-bootstrap";
import image from '../../assets/images/image.png';
import styles from './callback.module.css';

export default function CallbackFunction() {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div className={`form-wrapper border rounded-4 pt-3 ${styles['formWrapperStyles']}`}>
            <Row className="d-flex align-items-center">
                <Col xs={12} sm={12} md={12} lg={8} xl={8} className="ps-5">
                    <div className={`form-title mb-5 ${styles['formTitleStyles']}`}>
                        <p className='mb-0'>Could not find what you are looking for? </p>
                        <h3 className="fw-bold">Request a Callback!</h3>
                    </div>
                    <div id="callback-form">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className='mb-3'>
                                <Form.Group className="mb-2" as={Col} md="4" controlId='nameControl'>
                                    <Form.Control required type='text' placeholder='enter your name' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-2" as={Col} md="4" controlId="phoneControl">
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                        <Button variant="btn btn-warning">
                                            Send
                                        </Button>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid phone number.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-2" as={Col} md="4" controlId='phoneOtp'>
                                    <Form.Control required type='text' placeholder='enter otp' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col className='d-none d-lg-flex' xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Image src={image} alt="callback image" fluid />
                </Col>
            </Row>
        </div>
    )
}
