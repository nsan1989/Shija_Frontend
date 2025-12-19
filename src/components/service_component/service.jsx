import { Image } from 'react-bootstrap'
import styles from './service.module.css'
/* --api's-- */
import useServiceData from '../../api/service_api'

export default function ServiceFunction() {

    const dummyServices = [
        {
            id: "dummy-1",
            image: "/images/user-placeholder.png",
            author_name: "John Doe",
            short_notes: "This is a sample service for preview purposes."
        }
    ];


    const { data: serviceData } = useServiceData();
    const service = serviceData?.service_data || [];

    const newServiceData = service && service.length > 0 ? [...service] : dummyServices;


    return (
        <div className={`service-wrapper gap-3 ${styles[`serviceWrapperStyles`]}`}>
            {newServiceData.map((item, index) => (
                <div
                    key={`${item.id}-${index}`}
                    className={`service-items ${styles.serviceItemsStyles}`}
                >
                    <Image
                        src={item.image}
                        alt={item.service_name}
                        className={`service-image ${styles.serviceImageStyles}`}
                    />

                    <div className={`service-content ${styles.serviceContentStyles}`}>
                        <h3 className="mb-1">{item.title}</h3>
                        <p className="mb-0">{item.sub_title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
