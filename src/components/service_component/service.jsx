import { Button, Row, Col, Image } from "react-bootstrap";
import styles from "./service.module.css";
import { FaArrowRight } from "react-icons/fa";
/* --api's-- */
import useServiceData from "../../api/service_api";

export default function ServiceFunction() {
  const dummyServices = [
    {
      id: "dummy-1",
      image: "/images/user-placeholder.png",
      author_name: "John Doe",
      short_notes: "This is a sample service for preview purposes.",
    },
  ];

  const { data: serviceData } = useServiceData();
  const service = serviceData?.service_data || [];

  const newServiceData =
    service && service.length > 0 ? [...service] : dummyServices;

  return (
    <div className={`service-wrapper ${styles['service-wrapper']}`}>
      {newServiceData.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className={`bento-card ${styles['bento-card']} ${index === 0 ? "featured" : ""}`}
        >
          <div className="card-img">
            <Image
              className="img-fluid rounded"
              src={item.image}
              alt={item.service_name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="card-body">
            <h3>{item.service_name}</h3>
            <p>{item.sub_title}</p>
            <div className="card-btn">
              <Button className="btn btn-warning">
                Contact&nbsp;&nbsp;
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
