import { useState } from "react";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import styles from './media.module.css';
import { FaHome, FaAngleRight } from "react-icons/fa"
import { Container, Row, Col } from 'react-bootstrap';
import NewsViewComponent from "../../components/news-view-component/NewsViewComponent";
import EventsViewComponent from "../../components/events-view-component/EventsViewComponent";
import CampsViewComponent from "../../components/camps-view-component/CampsViewComponent";

const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Media Centre', href: '/shija_in_the_news' },
];

export default function MediaPage() {

    const [activeTab, setActiveTab] = useState(0);

    TitleComponent('Media Centre')

    const tabs = [
        { label: "Shija News", content: <NewsViewFunction /> },
        { label: "Events", content: <EventsViewComponent /> },
        { label: "Camps", content: <CampsViewComponent /> },
        { label: "Media Gallery", content: <div>Gallery Data</div> }
    ];

    return (
        <div className={`media-wrapper ${styles.mediaWrapperStyle}`}>
            <Container>
                <div className='breadcrumb-content py-3'>
                    <BreadcrumbComponent items={breadcrumbItems} />
                </div>
                <Row className="d-flex mb-3">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className="nav flex-column gap-1 nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                                        nav-link d-flex justify-content-between rounded-0 
                                        ${activeTab === index ? "bg-primary text-white" : "bg-secondary text-white"}
                                    `}
                                >
                                    {tab.label}
                                    <FaAngleRight />
                                </button>
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active">
                                {tabs[activeTab].content}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
