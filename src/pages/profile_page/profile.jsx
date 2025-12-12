import { useState } from 'react';
import BreadcrumbComponent from '../../components/breadcrumb_component/breadcrumb';
import Title from '../../components/title_component/title'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { FaHome } from "react-icons/fa"
import styles from './profile.module.css'


const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Doctors', href: '/doctors-page' },
    { label: 'Profile' }
];

export default function Profile() {

    Title('Profile')

    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className={`profile-wrapper ${styles.profileWrapperStyle}`}>
            <Container fluid>
                <div className="profile-header py-3">
                    {/* breadcrumb section */}
                    <BreadcrumbComponent items={breadcrumbItems} />
                    <Row>
                        <Col lg={4}>Profile Photo</Col>
                        <Col lg={4}>Details</Col>
                        <Col lg={4}>Schedules</Col>
                    </Row>
                </div>
                <div className="profile-details">
                    <ul className="nav nav-pills mb-3">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "overview" ? "active" : ""}`}
                                onClick={() => setActiveTab("overview")}
                            >
                                Overview
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "experience" ? "active" : ""}`}
                                onClick={() => setActiveTab("experience")}
                            >
                                Experience
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "treatment" ? "active" : ""}`}
                                onClick={() => setActiveTab("treatment")}
                            >
                                Treatments
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "condition" ? "active" : ""}`}
                                onClick={() => setActiveTab("condition")}
                            >
                                Conditions
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "faq" ? "active" : ""}`}
                                onClick={() => setActiveTab("faq")}
                            >
                                faqs
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content mt-3">
                        {activeTab === "overview" && (
                            <div>
                                <h4>Overview</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                                    explicabo architecto culpa, ea vitae sit, distinctio debitis
                                    consequuntur est repellendus ipsam ratione quos saepe repudiandae.
                                </p>
                            </div>
                        )}

                        {activeTab === "experience" && (
                            <div>
                                <h4>Experience</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                                    earum necessitatibus sequi repellendus adipisci, omnis architecto
                                    fugit impedit.
                                </p>
                            </div>
                        )}

                        {activeTab === "treatment" && (
                            <div>
                                <h4>Treatment Section</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                                    earum necessitatibus sequi repellendus adipisci, omnis architecto
                                    fugit impedit.
                                </p>
                            </div>
                        )}

                        {activeTab === "condition" && (
                            <div>
                                <h4>Condition Section</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                                    earum necessitatibus sequi repellendus adipisci, omnis architecto
                                    fugit impedit.
                                </p>
                            </div>
                        )}

                        {activeTab === "faq" && (
                            <div>
                                <h4>FAQs Section</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                                    earum necessitatibus sequi repellendus adipisci, omnis architecto
                                    fugit impedit.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}
