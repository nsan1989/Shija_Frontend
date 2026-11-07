import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './testimonial.module.css';
import {
    getTestimonialData,
    TESTIMONIAL_URL,
} from '../../services/apiService';
import doctorIcon from '../../assets/icons/doctor-icon.png';

const dummyTestimonials = [
    {
        id: "sample-1",
        image: doctorIcon,
        author_name: "Alex Morgan",
        short_notes: "The team was kind and supportive throughout my visit. I felt well cared for at every step."
    },
    {
        id: "sample-2",
        image: doctorIcon,
        author_name: "Jamie Taylor",
        short_notes: "The doctors explained everything clearly, and the staff made the whole experience comfortable."
    },
];

function getTestimonialImage(item) {
    const image = item.image || item.author_image;
    if (typeof image !== "string" || !image) return doctorIcon;
    if (/^(https?:)?\/\//i.test(image) || image.startsWith("/")) return image;
    return `${TESTIMONIAL_URL}${image}`;
}

export default function TestimonialComponent() {
    const [testData, setTestData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;

        const fetchData = async () => {
            try {
                const data = await getTestimonialData();
                const testimonials = Array.isArray(data)
                    ? data
                    : Array.isArray(data?.msg)
                        ? data.msg
                        : [];

                if (active) {
                    setTestData(testimonials.map((item) => ({
                        ...item,
                        image: getTestimonialImage(item),
                    })));
                }
            } catch (fetchError) {
                if (active) {
                    setError(
                        fetchError instanceof Error
                            ? fetchError.message
                            : "Unable to load testimonials.",
                    );
                }
            } finally {
                if (active) setLoading(false);
            }
        };

        fetchData();
        return () => {
            active = false;
        };
    }, []);

    const testimonials = testData.length > 0 ? testData : dummyTestimonials;

    return (
        <div className={`testimonial-wrapper gap-3 ${styles[`testimonialWrapperStyles`]}`}>
            {error && (
                <p className={styles.testimonialError} role="status">
                    Unable to load testimonials: {error}. Showing sample testimonials.
                </p>
            )}
            {loading && testData.length === 0 ? (
                <p className={styles.testimonialStatus} role="status">
                    Loading testimonials...
                </p>
            ) : testimonials.map((item, index) => (
                <div
                    key={`${item.id || item.author_name}-${index}`}
                    className={`testimonial-items ${styles.testimonialItemsStyles}`}
                >
                    <Image
                        src={item.image}
                        alt={item.author_name || "Patient"}
                        className={`testimonial-image rounded ${styles.testimonialImageStyles}`}
                    />

                    <div className={`testimonial-content rounded-3 ${styles.testimonialContentStyles}`}>
                        <h3 className="mb-1">{item.author_name || "Patient"}</h3>
                        <p className="mb-0">{item.short_notes}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
