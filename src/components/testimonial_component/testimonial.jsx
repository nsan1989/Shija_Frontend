import { Image } from 'react-bootstrap'
import styles from './testimonial.module.css'
/* --api's-- */
import useTestimonialData from '../../api/testimonial_api'

export default function TestimonialCard() {

    const dummyTestimonials = [
        {
            id: "dummy-1",
            image: "/images/user-placeholder.png",
            author_name: "John Doe",
            short_notes: "This is a sample testimonial for preview purposes."
        }
    ];


    const { data: testimonialData } = useTestimonialData();
    const testimonial = testimonialData?.testimonial_data || [];

    const newTestimonialData = testimonial && testimonial.length > 0 ? [...testimonial, ...testimonial] : dummyTestimonials;


    return (
        <div className={`testimonial-wrapper gap-3 ${styles[`testimonialWrapperStyles`]}`}>
            {newTestimonialData.map((item, index) => (
                <div
                    key={`${item.id}-${index}`}
                    className={`testimonial-items ${styles.testimonialItemsStyles}`}
                >
                    <Image
                        src={item.image}
                        alt={item.author_name}
                        className={`testimonial-image rounded ${styles.testimonialImageStyles}`}
                    />

                    <div className={`testimonial-content rounded-3 ${styles.testimonialContentStyles}`}>
                        <h3 className="mb-1">{item.author_name}</h3>
                        <p className="mb-0">{item.short_notes}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
