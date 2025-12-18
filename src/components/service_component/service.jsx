import { Image } from 'react-bootstrap'
import styles from './service.module.css'
/* --api's-- */
import useServiceData from '../../api/service_api'

export default function ServiceFunction() {

    const { data: serviceData } = useServiceData();
    const service = serviceData?.service_data || [];

    const newServiceData = service && service.length > 0 ? service : [];

    return (
        <div className="service-wrapper">
            {newServiceData.map((item, index) => (
                <div
                    key={`${item.id}-${index}`}
                    className="service-items"
                >
                    <Image
                        src={item.icon}
                        alt={item.service_name}
                        className={`service-image rounded ${styles.serviceImageStyles}`}
                    />
                    <div className={`service-content rounded-3 ${styles.serviceContentStyles}`}>
                        <h3 className="mb-1">{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
