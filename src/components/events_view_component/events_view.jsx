import { Link } from "react-router-dom";
import styles from "./events_view.module.css";
/* --api's-- */
import useEventsViewData from "../../api/events_view_api";

export default function EventsViewFunction() {
    const { data: eventsViewData } = useEventsViewData();
    const events = eventsViewData?.events_view_data || [];
    const newEventsData = events && events.length > 0 ? events : [];
    return (
        <div className={`events-wrapper ${styles.eventWrapperStyles}`}>
            <div className="event-title">
                <h3 className="fw-bold">Events</h3>
            </div>
            <hr />
            {newEventsData.map((item, index) => (
                <>
                    <div key={`${item.id}-${index}`} className="event-items">
                        <p className="mb-0">
                            Date of Event&#58;&nbsp;{item.start_date}
                        </p>
                        <Link
                            className={`${styles.eventLinkStyles}`}
                            to={item.event_name}
                        >
                            {item.event_name}
                        </Link>
                    </div>
                    <hr />
                </>
            ))}
        </div>
    );
}
