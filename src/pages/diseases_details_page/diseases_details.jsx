import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Title from '../../components/title_component/title';
import BreadcrumbComponent from "../../components/breadcrumb_component/breadcrumb";
import styles from './diseases_details.module.css';
import { FaHome } from "react-icons/fa";

const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Disease Details' }
];

const DISEASE_DETAILS_URL = "../Diseases-Repository/details/";

export default function DiseasesDetailsPage() {
    Title('Disease Details');

    const { diseaseId } = useParams();
    const [diseaseDetails, setDiseaseDetails] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchDiseaseDetails = async () => {
            try {
                const res = await fetch(`${DISEASE_DETAILS_URL}${diseaseId}-details.json`);
                console.log(res);

                if (!res.ok) throw new Error("File not found");

                const data = await res.json();
                setDiseaseDetails(data);
                setError(false);
            } catch (err) {
                console.error("Error fetching disease details:", err);
                setError(true);
            }
        };

        if (diseaseId) fetchDiseaseDetails();
    }, [diseaseId]);

    return (
        <div className={`diseases-details-wrapper h-100 ${styles.diseasesWrapperStyles}`}>
            <Container>
                <div className="diseases-details-header">
                    <h3 className="fw-bold">Disease Detail</h3>
                </div>

                <div className='breadcrumb-content py-3'>
                    <BreadcrumbComponent items={breadcrumbItems} />
                </div>

                <div className="diseases-details-content">
                    {error && <p>Disease details not found.</p>}

                    {!error && !diseaseDetails && <p>Loading...</p>}

                    {diseaseDetails && (
                        <>
                            <h4>{diseaseDetails.name}</h4>
                            <p>{diseaseDetails.about}</p>

                            {diseaseDetails.symptoms?.length > 0 && (
                                <>
                                    <h5>Symptoms</h5>
                                    <ul>
                                        {diseaseDetails.symptoms.map((s, i) => (
                                            <li key={i}>{s}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {diseaseDetails.causes?.length > 0 && (
                                <>
                                    <h5>Causes</h5>
                                    <ul>
                                        {diseaseDetails.causes.map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}
