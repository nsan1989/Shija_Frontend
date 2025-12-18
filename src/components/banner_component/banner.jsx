import { Container, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './banner.module.css'
/* --api's-- */
import useBannerData from '../../api/banner_api'

export default function BannerFunction() {

    const { data: bannerData } = useBannerData()
    const banner = bannerData

    return (
        <div className={`banner-wrapper ${styles[`banner-section-styles`]}`}>
            {/* desktop swiper */}
            < Container fluid className='p-0 h-100 d-none d-md-flex' >
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    effect='slide'
                    loop={true}
                    speed={1200}
                    className={styles.bannerSwipper}
                >
                    {banner?.desktop_images?.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                className={styles["banner-image-styles"]}
                                src={img}
                                alt={`Banner ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container >
            {/* mobile swiper */}
            < Container fluid className='p-0 h-100 d-md-none' >
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    effect='slide'
                    loop={true}
                    speed={1200}
                    className={styles.bannerSwipper}
                >
                    {banner?.mobile_images?.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                className={styles["banner-image-styles"]}
                                src={img}
                                alt={`Banner ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container >
        </div>
    )
}