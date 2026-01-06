import { Link } from 'react-router-dom'
import styles from './news_view.module.css'
/* --api's-- */
import useNewsViewData from '../../api/news_slide_api'

export default function NewsViewFunction() {

    const { data: newsViewData } = useNewsViewData()
    const news = newsViewData?.news_data || []
    const newNewsData = news && news.length > 0 ? news : [];

    return (
        <div className={`news-wrapper ${styles.newWrapperStyles}`}>
            <div className="new-title">
                <h3 className='fw-bold'>News</h3>
            </div>
            <hr />
            {newNewsData.map((item, index) => (
                <>
                    <div
                        key={`${item.id}-${index}`}
                        className="news-items"
                    >
                        <p className='mb-0'>Date of News&#58;&nbsp;{item.news_date}</p>
                        <Link className={`${styles.newsLinkStyles}`} to={item.heading}>
                            {item.heading}
                        </Link>
                    </div>
                    <hr />
                </>
            ))}
        </div>
    )
}
