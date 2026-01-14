import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styles from './coe.module.css'

/* --api's-- */
import useCoeData from '../../api/coe_api'

export default function CoeFunction() {

    const { data: coeData } = useCoeData()
    const coe = coeData?.coe_data || []
    const newCoeData = coe && coe.length > 0 ? coe : [];

    return (
        <div className={`coe-wrapper ${styles.coeSectionStyles}`}>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                }}
                className="mySwiper"
            >
                {newCoeData.map((item, index) => (
                    <SwiperSlide key={`${item.id}-${index}`}>
                        <Link className={`${styles['swiperLink']}`} to={`/speciality_details?id=${item.id}`}>
                            <div className={`border shadow-sm rounded ${styles['swiperContent']}`}>
                                <Image src={item.image} alt={item.name} fluid style={{ width: "6rem", height: "6rem" }} />
                                <h3 className="mt-2 fw-bold">{item.name}</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
