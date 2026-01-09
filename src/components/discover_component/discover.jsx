import { useRef, useState } from 'react';
import styles from './discover.module.css';
import { Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
/* --api's-- */
import useDiscoverData from '../../api/discover_api';

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

    const { data: discoverData } = useDiscoverData();
    const discovers = discoverData?.discover_data || [];
    const newDiscoverData = discovers && discovers.length > 0 ? discovers : [];

    return (
        <div className={`discover-wrapper ${styles.discoverWrapperStyles}`}>
            {/* 🔹 DISCOVER HEADERS (Horizontal) */}
            <div className="d-flex gap-2 mb-3 overflow-auto">
                {newDiscoverData.map((item, index) => (
                    <div key={`header-${item.id}`}>
                        <Button
                            variant="outline-primary"
                            onClick={() => scrollToBody(index)}
                        >
                            {item.header}
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
                        cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
                    }}
                >
                    <FaChevronLeft size={24} />
                </Button>

                {/* 🔹 SCROLL CONTAINER */}
                <div className="d-flex gap-4 overflow-auto flex-nowrap w-100">
                    {discovers.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => (bodyRefs.current[index] = el)}
                            className="discover-body border d-flex p-4 shadow-sm rounded"
                            style={{ minWidth: '650px' }}
                        >
                            <div className="discover-image me-4">
                                <img
                                    src={item.image}
                                    alt={item.header}
                                    className={`img-fluid rounded ${styles.discoverImageStyles}`}
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
                        cursor: currentIndex === discovers.length - 1 ? 'not-allowed' : 'pointer'
                    }}
                >
                    <FaChevronRight size={24} />
                </Button>
            </div>
        </div>
    );
}
