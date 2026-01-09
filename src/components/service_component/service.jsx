import { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styles from './service.module.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
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
                        className={`p-0 ${styles[`cardWrapperStyles`]}`}
                        key={`${item.id}-${index}`}
                        xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}
                    >
                        <div className="service-image">
                            <Image
                                className='img-fluid w-100'
                                src={item.image}
                                alt={item.service_name}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className={`service-content ${styles[`serviceContentStyles`]}`}>
                            <h3 className='mb-0'>{item.title}</h3>
                            <p>{item.sub_title}</p>
                            <div className="service-link">
                                <a href="">Know More&nbsp;<FaAngleRight /></a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
