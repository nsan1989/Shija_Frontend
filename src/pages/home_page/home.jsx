import { useState, useEffect } from 'react';
import { Container, Image, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Title from '../../components/title_component/title';
import Search from '../../components/search_component/search';
import FloatNav from '../../components/float_nav_component/float_nav';
import BannerFunction from '../../components/banner_component/banner';
import DiscoverFunction from '../../components/discover_component/discover';
import TestimonialCard from '../../components/testimonial_component/testimonial';
import SideNav from '../../components/side_nav_component/side_nav';
import ServiceFunction from '../../components/service_component/service';
import CallbackFunction from '../../components/callback_component/callback';
import FaqComponent from '../../components/faq_component/faq';
import styles from './home.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
/* --api's-- */
import useEventsViewData from '../../api/events_view_api';

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const DISEASE_INDEX_URL = "../Diseases-Repository/index/diseases-index.json"

export default function Home() {

    Title('Home')

    const { data: eventsViewData } = useEventsViewData()
    const events = eventsViewData?.events_view_data || []
    const newEventsData = events && events.length > 0 ? events : [];
    const [indexData, setIndexData] = useState({});
    const [selectedLetter, setSelectedLetter] = useState("A");

    useEffect(() => {
        const fetchIndex = async () => {
            try {
                const res = await fetch(DISEASE_INDEX_URL);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const text = await res.text();
                const data = text ? JSON.parse(text) : {};
                setIndexData(data);
            } catch (err) {
                console.error("Error fetching JSON:", err);
                setIndexData({});
            }
        };
        fetchIndex();
    }, []);

    const diseases = indexData[selectedLetter] || [];

    return (
        <div className='home-wrapper'>
            <SideNav />
            {/* banner section */}
            <section className="banner-section">
                <div className={styles.searchComponentStyle}>
                    <Search placeholder='Search for Doctors and Specialities...' />
                </div>
                <FloatNav />
                <BannerFunction />
            </section>
            {/* end of banner section */}
            {/* discover section */}
            <section className={`discover-section ${styles['discover-section-styles']}`}>
                <Container>
                    <div className="section-title mb-3">
                        <h3 className='fw-bold' style={{ color: "#6b1d20" }}>Discover Our Centres of Clinical Excellence</h3>
                        <p className='mb-0' style={{ color: "#6b1d20" }}>Experience world-class healthcare at Apollo's specialized hubs of medical innovation. Our state-of-the-art centres deliver unparalleled expertise in key specialties and super specialties.
                            Each centre stands as a beacon of cutting-edge care, setting new benchmarks in clinical outcomes globally.</p>
                    </div>
                    <div className='mb-3'>
                        <DiscoverFunction />
                    </div>
                    <div className="section-button d-flex justify-content-center">
                        <Link className="btn btn-warning" to="/centres_of_excellence">View All Specialities</Link>
                    </div>
                </Container>
            </section>
            {/* end of discover section */}
            {/* Diseases and Conditions Search */}
            <section className={`diseases-and-conditions-section ${styles['diseases-and-conditions-styles']}`}>
                <Container>
                    <Row>
                        <Col
                            xs={12} sm={12} md={7} lg={7} xl={7}
                        >
                            <div className="section-title mb-3">
                                <h3 className='mb-3 fw-bold'>Find Diseases & Conditions By Alphabet</h3>
                                <div className={`alphabet-warpper rounded-4 ${styles['grid']}`}>
                                    {alphabets.map((letter) => (
                                        <button
                                            key={letter}
                                            className={`circle ${styles['circle']} ${letter === selectedLetter ? "active" : ""}`}
                                            onClick={() => setSelectedLetter(letter)}
                                        >
                                            {letter}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                            <div className="column-title mb-3">
                                <h3>List of related diseases</h3>
                            </div>
                            {diseases.length > 0 ? (
                                <>
                                    <ul className={`disease-list ${styles['diseaseListStyles']}`}>
                                        {diseases.slice(0, 8).map(item => (
                                            <li key={item.slug}>
                                                <Link
                                                    className={`disease-link ${styles['diseaseLinkStyles']}`}
                                                    to={`/disease-details/${item.slug}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="all-diseases-link mt-3">
                                        <Link to="/diseases-and-conditions">View All Diseases</Link>
                                    </div>
                                </>
                            ) : (
                                <p>No diseases available for this letter.</p>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end ofDiseases and Conditions Search */}
            {/* services section */}
            <section className={`services-section ${styles[`service-section-styles`]}`}>
                <Container>
                    <div className="section-title mb-3 text-center">
                        <h3 className='mb-0 fw-bold'>Services</h3>
                    </div>
                    <div className="service-content">
                        <ServiceFunction />
                    </div>
                </Container>
            </section>
            {/* end of Services section */}
            {/* new section */}
            <section className={`new-section py-5`}>
                <Container>
                    <div className="section-title mb-3 text-center d-flex justify-content-between">
                        <h3 className='mb-0 fw-bold'>What's New At Shija</h3>
                        <div className="explore-btn">
                            <a className='btn btn-warning rounded' href='/media-page'>Explore More <FaArrowRightLong /></a>
                        </div>
                    </div>
                    <div className="section-content">
                        <Row>
                            {newEventsData.map((items, index) => (
                                <Col xs={12} sm={12} md={3} lg={3} xl={3} key={index}>
                                    <Card className={`event-card ${styles['eventsCardStyles']}`}>
                                        <Image src={items.image} alt={items.event_name} />
                                        <div className={`event-content ${styles['eventContentStyles']}`}>
                                            <h4>{items.event_name}</h4>
                                            <div className="bottom-content d-flex justify-content-between">
                                                <p>{items.start_date}</p>
                                                <a href=""><FaArrowRightLong /></a>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
            {/* end of new section */}
            {/* testimonial section */}
            <section className={`testimonial-section ${styles['testimonial-section-styles']}`}>
                <Container>
                    <div className="section-title mb-3 text-center">
                        <h3 className='mb-0 fw-bold'>Patient Stories</h3>
                    </div>
                    <div className="section-content">
                        <TestimonialCard />
                    </div>
                </Container>
            </section>
            {/* end of testimonial section */}
            {/* callback section */}
            <section className={`callback-section py-5 ${styles['callbackWrapperStyles']}`}>
                <Container>
                    <div className="section-content mb-5">
                        <FaqComponent />
                    </div>
                    <div className="section-content">
                        <CallbackFunction />
                    </div>
                </Container>
            </section>
            {/* end of callback section */}
        </div>
    )
}
