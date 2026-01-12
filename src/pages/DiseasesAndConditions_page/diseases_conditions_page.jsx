import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/title_component/title'
import BreadcrumbComponent from '../../components/breadcrumb_component/breadcrumb';
import Search from '../../components/search_component/search';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome } from "react-icons/fa";
import styles from './diseases_conditions.module.css';

const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Diseases and Conditions', href: '/diseases_and_conditions' },
];

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const DISEASE_INDEX_URL = "../Diseases-Repository/index/diseases-index.json"

export default function DiseasesAndConditionsPage() {

    Title('Diseases & Conditions')

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
                                <Search placeholder="Search for Diseases and Conditions..." />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="diseases-conditions-content">
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
                    <div className="column-title mb-3">
                        <h3>List of related diseases</h3>
                    </div>
                    {diseases.length > 0 ? (
                        <>
                            <ul className={`disease-list ${styles['diseaseListStyles']}`}>
                                {diseases.map(item => (
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
                        </>
                    ) : (
                        <p>No diseases available for this letter.</p>
                    )}
                </div>
            </Container>
        </div>
    )
}
