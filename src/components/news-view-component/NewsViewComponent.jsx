import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  getNewsSlidesData,
  NEWS_SLIDES_URL,
  getAllNewsData,
  ALL_NEWS_URL,
} from "../../services/apiService";
import { htmlToText } from "../../utils/htmlToText";
import styles from "./news_view.module.css";
import "swiper/css";
import "swiper/css/pagination";
import CardComponent from "../card-component/CardComponent";

function getImageUrl(image, baseUrl = NEWS_SLIDES_URL) {
  if (typeof image !== "string" || !image) return "";
  if (/^(https?:)?\/\//i.test(image) || image.startsWith("/")) return image;
  return `${baseUrl}${image}`;
}

export default function NewsViewComponent() {
  const [newsSlide, setNewsSlide] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newsOrder, setNewsOrder] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      try {
        const [slidesResponse, allNewsResponse] = await Promise.all([
          getNewsSlidesData(),
          getAllNewsData(),
        ]);
        if (active) {
          setNewsSlide(
            Array.isArray(slidesResponse?.msg) ? slidesResponse.msg : [],
          );
          setAllNews(
            Array.isArray(allNewsResponse)
              ? allNewsResponse
              : Array.isArray(allNewsResponse?.msg)
                ? allNewsResponse.msg
                : [],
          );
        }
      } catch (fetchError) {
        if (active) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to load news.",
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

  if (loading) {
    return (
      <p className={styles.statusMessage} role="status">
        Loading news...
      </p>
    );
  }

  if (error) {
    return (
      <p className={styles.statusMessage} role="alert">
        Unable to load news: {error}
      </p>
    );
  }

  if (newsSlide.length === 0 && allNews.length === 0) {
    return <p className={styles.statusMessage}>No news available.</p>;
  }

  const categories = [
    ...new Set(
      allNews.map(
        (item) =>
          item.category || item.category_name || item.type || "News",
      ),
    ),
  ];
  const visibleNews = allNews
    .filter((item) => {
      const category =
        item.category || item.category_name || item.type || "News";
      return selectedCategory === "all" || category === selectedCategory;
    })
    .sort((first, second) => {
      const firstDate = new Date(
        first.news_date || first.date || first.created_at || 0,
      ).getTime();
      const secondDate = new Date(
        second.news_date || second.date || second.created_at || 0,
      ).getTime();
      return newsOrder === "newest"
        ? secondDate - firstDate
        : firstDate - secondDate;
    });

  return (
    <>
      {newsSlide.length > 0 && (
        <section className={styles.newsSection} aria-label="Latest news">
          <div className={styles.carouselShell}>
            <Swiper
              modules={[Autoplay, Pagination]}
              onSwiper={setSwiper}
              slidesPerView={1}
              autoplay={
                newsSlide.length > 1
                  ? {
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              pagination={{ clickable: true }}
              loop={newsSlide.length > 1}
              className={styles.newsSwiper}
            >
              {newsSlide.map((item, index) => {
                const title = item.title || item.name || "Latest news";
                const description = item.description || item.text || "";
                const image = getImageUrl(item.image);
                const category =
                  item.category || item.category_name || item.type || "News";
                const date = item.date || item.created_at;

                return (
                  <SwiperSlide
                    key={item.id || item.slug || `${title}-${index}`}
                  >
                    <article className={styles.newsCard}>
                      {image ? (
                        <img
                          className={styles.newsImage}
                          src={image}
                          alt={item.image_alt || title}
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={styles.imagePlaceholder}
                          aria-hidden="true"
                        >
                          Shija News
                        </div>
                      )}
                      <div className={styles.newsContent}>
                        <span className={styles.newsCategory}>{category}</span>
                        <h3>{title}</h3>
                        {description && (
                          <div className={styles.newsDescription}>
                            {htmlToText(
                              typeof description === "string"
                                ? description
                                : String(description),
                            )}
                          </div>
                        )}
                        {date && (
                          <time className={styles.newsDate} dateTime={date}>
                            <span>Date:</span> {date}
                          </time>
                        )}
                      </div>
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {newsSlide.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.sliderButton} ${styles.previousButton}`}
                  aria-label="Previous news"
                  onClick={() => swiper?.slidePrev()}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className={`${styles.sliderButton} ${styles.nextButton}`}
                  aria-label="Next news"
                  onClick={() => swiper?.slideNext()}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </>
            )}
          </div>
        </section>
      )}
      <section
        className={styles.allNewsSection}
        aria-labelledby="all-news-heading"
      >
        <div className={styles.allNewsHeader}>
          <h2 id="all-news-heading">Apollo News ({allNews.length})</h2>
          <div className={styles.newsFilters}>
            <label className={styles.filterControl}>
              <span className={styles.visuallyHidden}>Filter by category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <option value="all">All Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.filterControl}>
              <span className={styles.visuallyHidden}>Sort news</span>
              <select
                value={newsOrder}
                onChange={(event) => setNewsOrder(event.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </label>
          </div>
        </div>
        {visibleNews.length > 0 ? (
          <div className={styles.allNewsGrid}>
            {visibleNews.map((item, index) => {
              const title =
                item.heading || item.title || item.name || item.news_title || "News";
              const description =
                item.description || item.text || item.news_description || "";
              const date = item.news_date || item.date || item.created_at;
              const category =
                item.category || item.category_name || item.type || "News";
              const image = getImageUrl(
                item.image || item.thumbnail,
                ALL_NEWS_URL,
              );

              return (
                <CardComponent
                  key={item.id || item.slug || `${title}-${index}`}
                  className={styles.allNewsCard}
                  image={image}
                  title={
                    <>
                      <span className={styles.categoryBadge}>{category}</span>
                      <span className={styles.cardTitle}>{title}</span>
                    </>
                  }
                  text={[
                    date ? `Date: ${date}` : "",
                    description ? htmlToText(String(description)) : "",
                  ]
                    .filter(Boolean)
                    .join("\n")}
                />
              );
            })}
          </div>
        ) : (
          <p className={styles.statusMessage}>
            {allNews.length > 0
              ? "No news articles found in this category."
              : "No news articles available."}
          </p>
        )}
      </section>
    </>
  );
}
