import { Container, Button, Accordion } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaGooglePlay, FaApple } from "react-icons/fa6"
import styles from './footer.module.css'
import CallbackFunction from '../callback_component/callback'

export default function Footer() {

    return (
        <div className={`footer-wrapper py-3 ${styles[`footer-wrapper-styles`]}`}>
            <Container>
                <div className="footer-top-content py-5 px-0">
                    <CallbackFunction />
                </div>
                <div className="footer-middle-content d-lg-flex py-3">
                    <div className={`footer-block d-none d-lg-block ${styles[`footer-block-styles`]}`}>
                        <h4 className='block-title mb-3'>For Patients</h4>
                        <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Find a Doctor</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Book an Appointment</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Emergency 24x7</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Patient Testinomials</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Disclaimer</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Terms & Conditions</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Privacy Policy</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Refund & Cancellations</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>More +</a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-lg-none mb-3'>
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    For Patients
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Find a Doctor</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Book an Appointment</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Emergency 24x7</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Patient Testinomials</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Disclaimer</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Terms & Conditions</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Privacy Policy</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Refund & Cancellations</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>More +</a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className={`footer-block d-none d-lg-block ${styles[`footer-block-styles`]}`}>
                        <h4 className='block-title mb-3'>Departments</h4>
                        <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Shija Eye Care</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>General and Minimal Access Surgery</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Obstetrics and Gynaecology</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Shija Heart Beat</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Paediatrics and Neonatology</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Respiratory Medicine</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Anaesthesiology & Critical Care</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Audiology & Speech-Language Pathology</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>More +</a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-lg-none mb-3'>
                        <Accordion>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    Departments
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Shija Eye Care</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>General and Minimal Access Surgery</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Obstetrics and Gynaecology</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Shija Heart Beat</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Paediatrics and Neonatology</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Respiratory Medicine</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Anaesthesiology & Critical Care</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Audiology & Speech-Language Pathology</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>More +</a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className={`footer-block d-none d-lg-block ${styles[`footer-block-styles`]}`}>
                        <h4 className='block-title mb-3'>Centre of Excellence</h4>
                        <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Orthopaedics</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Anaesthesiology and Critical Care</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Shija Eye Care Foundation</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Nursing Care</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>ENT</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>General and Laparoscopic Surgery</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Plastic and Reconstructive surgery</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Kidney Sciences</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>More +</a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-lg-none mb-3'>
                        <Accordion>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Centre of Excellence
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Orthopaedics</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Anaesthesiology and Critical Care</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Shija Eye Care Foundation</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Nursing Care</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>ENT</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>General and Laparoscopic Surgery</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Plastic and Reconstructive surgery</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Kidney Sciences</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>More +</a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className={`footer-block d-none d-lg-block ${styles[`footer-block-styles`]}`}>
                        <h4 className='block-title mb-3'>Quick Links</h4>
                        <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>About Us</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Contact Us</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>OP Price List</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Health Packages</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Gallery</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>News</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>Shija HRM</a>
                            </li>
                            <li className='mb-2'>
                                <a href='' className='footer-link'>More +</a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-lg-none mb-3'>
                        <Accordion>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>
                                    Quick Links
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className={`footer-links ${styles[`footer-links-styles`]}`}>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>About Us</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Contact Us</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>OP Price List</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Health Packages</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Gallery</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>News</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>Shija HRM</a>
                                        </li>
                                        <li className='mb-2'>
                                            <a href='' className='footer-link'>More +</a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className={`footer-block ${styles[`footer-block-styles`]}`}>
                        <h4 className='block-title mb-3'>Download Our App</h4>
                        <p className='mb-3'>
                            Download our eCLINIC App to book your appointments at your finger tips
                        </p>
                        <div className="download-links d-flex flex-column gap-3">
                            <div className="play-store-link">
                                <div className={`d-flex align-items-center rounded ${styles["app-link-styles"]}`}>
                                    <FaGooglePlay />
                                    &nbsp;&nbsp;
                                    <p className='m-0'>Get it on Google Play</p>
                                </div>
                            </div>
                            <div className="app-store-link">
                                <div className={`d-flex align-items-center rounded ${styles["app-link-styles"]}`}>
                                    <FaApple />
                                    &nbsp;&nbsp;
                                    <p className='m-0'>Get it on the App Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* copyright section */}
                <div className={`footer-bottom-content text-center py-3 ${styles[`footer-bottom-styles`]}`}>
                    <div className={`social-content mb-3 ${styles[`social-content-styles`]}`}>
                        <a href='' className='facebook-link'><FaFacebook size={24} /></a>
                        <a href='' className='instagram-link'><FaInstagram size={24} /></a>
                    </div>
                    <div className={`copyright-content ${styles[`copyright-content-styles`]}`}><p className='m-0'>copyright&nbsp;&copy;&nbsp;2025 Shija Hospital's and Research Institute.&nbsp;All Rights Reserved.</p></div>
                </div>
            </Container>
        </div>
    )
}
