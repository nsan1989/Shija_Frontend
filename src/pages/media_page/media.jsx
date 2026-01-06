import { useState } from "react";
import Title from "../../components/title_component/title";
import BreadcrumbComponent from "../../components/breadcrumb_component/breadcrumb";
import styles from './media.module.css';
import { FaHome, FaAngleRight } from "react-icons/fa"
import { Container, Row, Col } from 'react-bootstrap';
import NewsViewFunction from "../../components/news_view_component/news_view";

const breadcrumbItems = [
    { href: '/', icon: <FaHome /> },
    { label: 'Media Centre', href: '/shija_in_the_news' },
];

export default function MediaPage() {

    const [activeTab, setActiveTab] = useState(0);

    Title('Media Centre')

    const tabs = [
        { label: "Shija News", content: <NewsViewFunction /> },
        { label: "Events", content: <div>Events List</div> },
        { label: "Camps", content: <div>Camps Data</div> },
        { label: "Media Gallery", content: <div>Gallery Data</div> }
    ];

    return (
        <div className={`media-wrapper ${styles.mediaWrapperStyle}`}>
            <Container fluid className="p-0">
                <div className={`media-header ${styles.mediaHeaderStyle}`}>
                    <div className={`header-overlay ${styles.headerOverlayStyle}`}></div>
                </div>
            </Container>
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
