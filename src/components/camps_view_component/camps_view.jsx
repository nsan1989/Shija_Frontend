import { Link } from "react-router-dom";
import styles from "./camps_view.module.css";
/* --api's-- */
import useCampsViewData from "../../api/camps_view_api.jsx";

export default function CampsViewFunction() {
    const { data: campsViewData } = useCampsViewData();
    const camps = campsViewData?.camps_view_data || [];
    const newCampsData = camps && camps.length > 0 ? camps : [];
    return (
        <div className={`camps-wrapper ${styles.campWrapperStyles}`}>
            <div className="camp-title">
                <h3 className="fw-bold">Camps</h3>
            </div>
            <hr />
            {newCampsData.map((item, index) => (
                <>
                    <div key={`${item.id}-${index}`} className="camp-items">
                        <p className="mb-0">
                            Date of camp&#58;&nbsp;{item.start_date}
                        </p>
                        <p className="mb-0">
                            Camp Timing&#58;&nbsp;{item.camp_timing}
                        </p>
                        <Link
                            className={`${styles.campLinkStyles}`}
                            to={item.camp_name}
                        >
                            {item.camp_name}
                        </Link>
                    </div>
                    <hr />
                </>
            ))}
        </div>
    );
}
