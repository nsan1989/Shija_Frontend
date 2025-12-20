import React from 'react'
import { Container, Image, Card, Row, Col, Button } from 'react-bootstrap'
import Title from '../../components/title_component/title'
import Search from '../../components/search_component/search'
import FloatNav from '../../components/float_nav_component/float_nav'
import BannerFunction from '../../components/banner_component/banner'
import TestimonialCard from '../../components/testimonial_component/testimonial'
import CoeFunction from '../../components/coe_component/coe'
import ServiceFunction from '../../components/service_component/service'
import styles from './home.module.css'
/* --api's-- */
import useDiscoverData from '../../api/discover_api'

export default function Home() {

    Title('Home')

    const { data: discoverData, isLoading: isDiscoverLoading, error: discoverError } = useDiscoverData();
    const discover = discoverData?.discover_data || [];

    return (
        <div className='home-wrapper'>
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
                        <h3>Discover Our Centres of Clinical Excellence</h3>
                        <p className='mb-0'>Experience world-class healthcare at Apollo's specialized hubs of medical innovation. Our state-of-the-art centres deliver unparalleled expertise in key specialties and super specialties.
                            Each centre stands as a beacon of cutting-edge care, setting new benchmarks in clinical outcomes globally.</p>
                    </div>
                    <div className="section-navs mb-4">
                        {discover.map((item) => (
                            <React.Fragment key={item.id}>
                                <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <button
                                            className='nav-link active rounded-5'
                                            id='pills-discover-tab'
                                            data-bs-toggle='pill'
                                            data-bs-target={`#pane-${item.id}`}
                                            type="button" role="tab"
                                            aria-controls="pills-home"
                                            aria-selected="true"
                                        >
                                            {item.header}
                                        </button>
                                    </li>
                                </ul>
                                <Card className='p-4 rounded-4'>
                                    <Row>
                                        <Col className='col-12 col-md-8'>
                                            <div className="tab-content" id='pills-tabContent'>
                                                <div class="tab-pane fade show active"
                                                    id={`pane-${item.id}`}
                                                    role="tabpanel"
                                                    aria-labelledby="pills-home-tab"
                                                    tabindex="0"
                                                >
                                                    <h5 className='fw-bold'>{item.header}</h5>
                                                    <p>{item.body}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='col-12 col-md-4'>
                                            <Image className='img-fluid rounded' src={item.image} />
                                        </Col>
                                    </Row>
                                </Card>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="section-button d-flex justify-content-center">
                        <Button className='btn-warning'>View All Specialities</Button>
                    </div>
                </Container>
            </section>
            {/* end of discover section */}
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
            {/* coe section */}
            <section>
                <CoeFunction />
            </section>
            {/* end of coe section */}
        </div>
    )
}
