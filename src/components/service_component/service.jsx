import { Button, Row, Col, Image } from 'react-bootstrap';
import styles from './service.module.css'
import { FaArrowRight } from 'react-icons/fa';
/* --api's-- */
import useServiceData from '../../api/service_api'

export default function ServiceFunction() {

    const dummyServices = [
        {
            id: "dummy-1",
            image: "/images/user-placeholder.png",
            author_name: "John Doe",
            short_notes: "This is a sample service for preview purposes."
        }
    ];


    const { data: serviceData } = useServiceData();
    const service = serviceData?.service_data || [];

    const newServiceData = service && service.length > 0 ? [...service] : dummyServices;

    return (
        <div className="service-wrapper">
            <Row className='p-2' id='carouselSlider'>
                {newServiceData.map((item, index) => (
                    <Col
                        className={`shadow-sm ${styles[`cardWrapperStyles`]}`}
                        key={`${item.id}-${index}`}
                        xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}
                    >
                        <div className="service-image mb-3">
                            <Image
                                className='img-fluid'
                                src={item.image}
                                alt={item.service_name}
                                style={{
                                    width: "100%",
                                    height: "50%"
                                }}
                            />
                        </div>
                        <div className={`service-content ${styles[`serviceContentStyles`]}`}>
                            <h3 className='mb-0'>{item.service_name}</h3>
                            <p>{item.sub_title}</p>
                            <Button className='btn btn-warning'>Contact&nbsp;&nbsp;<FaArrowRight /></Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
