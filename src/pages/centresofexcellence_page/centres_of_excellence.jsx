import Title from '../../components/title_component/title'
import BreadcrumbComponent from '../../components/breadcrumb_component/breadcrumb';
import Search from '../../components/search_component/search';
import { FaHome } from "react-icons/fa"
import { Container, Row, Col } from 'react-bootstrap';
import styles from './centres_of_excellence.module.css';
import CoeFunction from '../../components/coe_component/coe';

const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Centres of Excellence', href: '/centres_of_excellence' },
];

export default function CentresOfExcellencePage() {

    Title('Centres of Excellence')

    return (
        <div className={`centres-of-excellence-wrapper ${styles.centresOfExcellenceWrapperStyle}`}>
            <Container>
                <div className="centres-of-excellence-header py-3">
                    <div className='mb-3'>
                        {/* breadcrumb section */}
                        <BreadcrumbComponent items={breadcrumbItems} />
                    </div>
                    <div className='mb-3'>
                        <h1>Centres of Excellence</h1>
                        <p>Our Centres of Excellence bring together multidisciplinary teams to deliver precise diagnosis, 
                            advanced treatments, and superior outcomes across a wide spectrum of medical specialties.</p>
                    </div>
                    <div>
                        <Row className='d-flex align-items-center'>
                            <Col lg={8}>
                                <Search placeholder="Search for Doctors, Specialities, Or Conditions" />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="centres-of-excellence-content my-4">
                    <div className="coe_content_heading">
                        <h2>Explore Our Centres of Excellence</h2>
                    </div>
                    <CoeFunction />
                </div>
            </Container>
        </div>
    )
}