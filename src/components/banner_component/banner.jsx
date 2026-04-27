import { useState, useRef } from 'react'
import { Container, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './banner.module.css'
/* --api's-- */
import useBannerData from '../../api/banner_api'

// Fallback banner data when API fails
const fallbackBanners = [
    {
        desktop: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80",
        mobile: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=768&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-doctors-and-nurses-in-a-hospital-4235-large.mp4"
    },
    {
        desktop: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1920&q=80",
        mobile: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=768&q=80",
        video: null
    },
    {
        desktop: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
        mobile: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=768&q=80",
        video: null
    }
]

export default function BannerFunction() {

    const { data: bannerData, error } = useBannerData()
    const [activeIndex, setActiveIndex] = useState(0)
    const videoRef = useRef(null)

    // Transform API data to match our format
    const transformBannerData = (data) => {
        if (!data?.desktop_images) return fallbackBanners
        
        return data.desktop_images.map((img, index) => ({
            desktop: img,
            mobile: data.mobile_images?.[index] || img,
            video: null
        }))
    }

    const banners = error ? fallbackBanners : transformBannerData(bannerData)

    return (
        <div className={`banner-wrapper ${styles[`banner-section-styles`]}`}>
            {/* desktop swiper */}
            <Container fluid className='p-0 h-100 d-none d-md-flex'>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={false}
                    navigation={false}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop={true}
                    speed={1200}
                    className={styles.bannerSwipper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slideContainer}>
                                {/* Video Background */}
                                {banner.video && (
                                    <video
                                        ref={videoRef}
                                        className={`${styles.videoBackground} ${activeIndex === index ? styles.videoActive : ''}`}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={banner.video} type="video/mp4" />
                                    </video>
                                )}
                                
                                {/* Image Background */}
                                <Image
                                    className={`${styles["banner-image-styles"]} ${activeIndex === index && !banner.video ? styles.kenBurns : ''}`}
                                    src={banner.desktop}
                                    alt={`Banner ${index + 1}`}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className={styles.gradientOverlay} />
                            </div>
                        </SwiperSlide>
                    ))}
                    
                    {/* Custom Navigation */}
                    <div className={styles.customNav}>
                        <div className={styles.navDots}>
                            {banners.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.navDot} ${activeIndex === index ? styles.navDotActive : ''}`}
                                    onClick={() => {
                                        const swiper = document.querySelector('.bannerSwipper .swiper').swiper
                                        if (swiper) swiper.slideTo(index)
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </Swiper>
            </Container >

            {/* mobile swiper */}
            <Container fluid className='p-0 h-100 d-md-none'>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={false}
                    effect='slide'
                    loop={true}
                    speed={1000}
                    className={styles.bannerSwipper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slideContainer}>
                                {/* Video Background for Mobile */}
                                {banner.video && (
                                    <video
                                        className={`${styles.videoBackground} ${activeIndex === index ? styles.videoActive : ''}`}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={banner.video} type="video/mp4" />
                                    </video>
                                )}
                                
                                <Image
                                    className={styles["banner-image-styles"]}
                                    src={banner.mobile}
                                    alt={`Banner ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                {/* Gradient Overlay */}
                                <div className={styles.gradientOverlay} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container >
        </div>
    )
}