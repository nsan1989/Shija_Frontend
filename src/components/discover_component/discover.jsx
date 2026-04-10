import { useRef, useState } from 'react';
import styles from './discover.module.css';
import { Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
/* --api's-- */
import useCoeData from '../../api/coe_api';

export default function DiscoverFunction() {
    const bodyRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollToBody = (index) => {
        if (index < 0 || index >= discovers.length) return;
        bodyRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest',
        });
        setCurrentIndex(index);
    };

    const { data: discoverData } = useCoeData();
    const discovers = discoverData?.coe_data || [];
    const newDiscoverData = discovers && discovers.length > 0 ? discovers : [];

    return (
        <div className={`discover-wrapper ${styles.discoverWrapperStyles}`}>
            {/* 🔹 DISCOVER HEADERS (Horizontal) */}
            <div className="d-flex gap-4 mb-3 overflow-auto">
                {newDiscoverData.map((item, index) => (
                    <div key={`header-${item.id}`}>
                        <Button
                            className={`rounded-4 ${styles['discoverButtonStyles']}`}
                            onClick={() => scrollToBody(index)}
                        >
                            {item.name}
                        </Button>
                    </div>
                ))}
            </div>

            {/* 🔹 BODY + NAVIGATORS */}
            <div className="d-flex align-items-center position-relative">

                {/* ◀ LEFT NAV */}
                <Button
                    variant="light"
                    className="me-2 shadow-sm"
                    disabled={currentIndex === 0}
                    onClick={() => scrollToBody(currentIndex - 1)}
                    style={{
                        cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%"
                    }}
                >
                    <FaChevronLeft size={24} />
                </Button>

                {/* 🔹 SCROLL CONTAINER */}
                <div className={`discover-body ${styles['discoverBodyStyles']}`}>
                    {discovers.slice(0, 5).map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => (bodyRefs.current[index] = el)}
                            className="discover-body bg-light rounded d-flex p-4 shadow-sm"
                            style={{ minWidth: '64rem' }}
                        >
                            <div className="discover-image me-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className={`rounded ${styles.discoverImageStyles}`}
                                    fluid
                                    style={{width:"16rem"}}
                                />
                            </div>
                            <div className="discover-content">
                                <p>{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ▶ RIGHT NAV */}
                <Button
                    variant="light"
                    className="ms-2 shadow-sm"
                    disabled={currentIndex === discovers.length - 1}
                    onClick={() => scrollToBody(currentIndex + 1)}
                    style={{
                        cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%"
                    }}
                >
                    <FaChevronRight size={24} />
                </Button>
            </div>
        </div>
    );
}
