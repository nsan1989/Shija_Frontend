import { Container } from "react-bootstrap";
import Title from "../../components/title_component/title";
import BreadcrumbComponent from "../../components/breadcrumb_component/breadcrumb";
import { FaHome } from "react-icons/fa";

import styles from "./refund&cancellation.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Refund and Cancellations" },
];

export default function RefundAndCancellation() {
  return (
    <Container className={`refund-wrapper ${styles["refundWrapperStyle"]}`}>
      <div className="breadcrumb-content py-3">
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <div className="refund-content">
        <div className={`title ${styles["titleStyle"]}`}>
          <h3>refund and cancellations</h3>
        </div>
        <div className="first-content">
          <div className={`content-title ${styles["contentTitleStyle"]}`}>
            <h5>standard rate&#58;</h5>
          </div>
          <div className={`content-text ${styles["contentTextStyle"]}`}>
            <p>
              The cancellation is free of charge 2 days prior to the date of
              appointment, after this time we charge you 90% the Consultation
              charge as cancellation fee, if we could not sell the room more.
            </p>
          </div>
        </div>
        <div className="second-content">
          <div className={`content-title ${styles["contentTitleStyle"]}`}>
            <h5>Non Refundable Rate&#58;</h5>
          </div>
          <div className={`content-text ${styles["contentTextStyle"]}`}>
            <p>
              For the non refundable bookings are no cancellation or changes
              possible. In case of a cancellation, 90% of the total amount will
              be charged as cancellation fee. Registration charge is non
              refundable.
            </p>
          </div>
        </div>
        <div className="third-content">
          <div className={`content-title ${styles["contentTitleStyle"]}`}>
            <h5>Medicine Return&#58;</h5>
          </div>
          <div className={`content-text ${styles["contentTextStyle"]}`}>
            <p>
              Medicine which has been purchase from our Pharmacy Outlet can be
              refunded only if it is brought back within 7 days from the date of
              purchase. Hard copy of the bill is compulsory.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
