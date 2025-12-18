import { useState } from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";

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
        <div className="form-wrapper border rounded-4 p-3">
            <Row className='mb-3'>
                <Col>
                    <div className="form-title">
                        <p className='mb-0'>Could not find what you are looking for? </p>
                        <h3>Request a Callback!</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
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
                <Col className='d-none d-lg-flex' xs={12} sm={12} md={12} lg={4} xl={4}>image</Col>
            </Row>
        </div>
    )
}
