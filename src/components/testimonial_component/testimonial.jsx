import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from "react-player";
import { FaCaretRight } from "react-icons/fa6";
import styles from './testimonial.module.css';

export default function TestimonialCard() {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Row className='m-0'>
            <Col md={6} lg={3}>
                <div className={`${styles.playerWrapperStyle}`}>
                    {/* React Player */}
                    <ReactPlayer
                        src="https://youtu.be/8LSt8_11wbQ"
                        playing={isPlaying}
                        width="100%"
                        height="100%"
                        controls={isPlaying}
                        style={{ objectFit: 'cover' }}
                    />
                    {/* Overlay */}
                    {!isPlaying && (
                        <div className={`${styles.overlayWrapperStyle}`}>
                            <div
                                className='p-3'
                                onClick={() => setIsPlaying(true)}
                                style={{
                                    cursor: "pointer"
                                }}
                            >
                                <FaCaretRight
                                    size={'2rem'}
                                    style={{ width: '4rem', height: '4rem', border: '1px solid #fff', borderRadius: '100%' }} />
                            </div>
                            <p className='m-0'>Title</p>
                            <small>Content Text</small>
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    )
}
