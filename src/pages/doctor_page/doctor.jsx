import Title from '../../components/title_component/title'
import BreadcrumbComponent from '../../components/breadcrumb_component/breadcrumb';
import Search from '../../components/search_component/search';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome } from "react-icons/fa"
import styles from './doctor.module.css';

const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Shija Doctors', href: '/doctors-page' },
];

export default function DoctorPage() {

    Title('Doctors')

    return (
        <div className={`doctor-wrapper ${styles.doctorWrapperStyle}`}>
            <Container fluid>
                <div className="doctor-header py-3">
                    <div className='mb-3'>
                        {/* breadcrumb section */}
                        <BreadcrumbComponent items={breadcrumbItems} />
                    </div>
                    <div className='mb-3'>
                        <h1>Find A Doctor</h1>
                        <p>Connect with Trusted Healthcare Experts for Personalized Care</p>
                    </div>
                    <div className={styles.searchComponentStyle}>
                        <Row className='d-flex align-items-center'>
                            <Col lg={8}>
                                <Search placeholder="Search for Doctors and Specialities..." />
                            </Col>
                            <Col lg={4}>
                                Filter Component
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={`doctor-body py-4 ${styles.doctorBodyStyle}`}>
                    <Row>
                        <Col lg={3} className={styles.filtersSection}>Filters</Col>
                        <Col lg={9} className={styles.doctorListSection}>Doctors List</Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
