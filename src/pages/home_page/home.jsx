import React from 'react'
import { Container, Image, Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Title from '../../components/title_component/title'
import Search from '../../components/search_component/search'
import FloatNav from '../../components/float_nav_component/float_nav'
import BannerFunction from '../../components/banner_component/banner'
import DiscoverFunction from '../../components/discover_component/discover'
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
                    <div className='mb-3'>
                        <DiscoverFunction />
                    </div>
                    <div className="section-button d-flex justify-content-center">
                        <Link className="btn btn-warning" to="/centres_of_excellence">View All Specialities</Link>
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
