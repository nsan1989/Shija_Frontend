import Title from '../../components/title_component/title'
import BreadcrumbComponent from '../../components/breadcrumb_component/breadcrumb';
import Search from '../../components/search_component/search';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome } from "react-icons/fa"
import styles from './diseases_conditions.module.css'

const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Diseases and Conditions', href: '/diseases_and_conditions' },
];

export default function DiseasesAndConditionsPage() {

    Title('Diseases & Conditions')

    return (
        <div className={`diseases-conditions-wrapper ${styles.diseasesConditionsWrapperStyle}`}>
            <Container fluid>
                <div className="diseases-condtions-header py-3">
                    <div className='mb-3'>
                        {/* breadcrumb section */}
                        <BreadcrumbComponent items={breadcrumbItems} />
                    </div>
                    <div className='mb-3'>
                        <h1>Disease and condition</h1>
                        <p>Detailed Insights into Causes, Risk Factors, Prevention, and Management</p>
                    </div>
                    <div className={styles.searchComponentStyle}>
                        <Row className='d-flex align-items-center'>
                            <Col lg={8}>
                                <Search placeholder= "Search for Diseases and Conditions..." />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}
