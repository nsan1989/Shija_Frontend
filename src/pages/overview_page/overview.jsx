import { Container, Row, Col, Image } from 'react-bootstrap'
import useOrganizationInfo from '../../api/organization_info_api'
import Title from '../../components/title_component/title'
import styles from './overview.module.css'

const ProfileCard = ({ person }) => {
    return (
        <div>
            <Row>
                <Col lg='4'>
                    <Image
                        className='img-fluid'
                        src={person?.profile_image || ''}
                        alt={person?.name || 'name'}
                    />
                    <h2 className='mb-0'>{person?.name}</h2>
                    <p>{person?.role}</p>
                </Col>
                <Col lg='8'>
                    {person?.bio}
                </Col>
            </Row>

        </div>
    );
};

export default function Overview() {

    Title('The Shija Story')

    const { data: orgData } = useOrganizationInfo()

    const orgList = Array.isArray(orgData) ? orgData : [];

    return (
        <div className={`overview-wrapper ${styles[`overview-wrapper-styles`]}`}>
            <Container fluid>
                <section>
                    {orgList.length > 0 ? (
                        orgList.map((person, index) => (
                            <ProfileCard key={index} person={person} />
                        ))
                    ) : (
                        <p className="text-center">No organization data available.</p>
                    )}
                </section>
            </Container>
        </div>
    )
}
