import { useEffect, useState } from 'react';
import { FaAngleUp } from "react-icons/fa6";
import styles from './scroll.module.css';

export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <div className={`scroll-wrapper ${styles["scrollWrapperStyles"]}`} title='Scroll to Top'>
                    <div
                        onClick={scrollToTop}
                        className={`button-wrapper ${styles["scrollButtonStyles"]}`}
                    >
                        <FaAngleUp />
                    </div>
                </div>
            )}
        </>
    );
}
