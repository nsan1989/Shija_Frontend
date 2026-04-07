import { Container, Row, Col, Image } from 'react-bootstrap'
import Title from '../../components/title_component/title'
import styles from './overview.module.css'

export default function Overview() {

    Title('The Shija Story')

    return (
        <div className={`overview-wrapper ${styles[`overviewWrapperStyles`]}`}>
            <Container fluid>
                <p className="text-center">No organization data available.</p>
            </Container>
        </div>
    )
}
