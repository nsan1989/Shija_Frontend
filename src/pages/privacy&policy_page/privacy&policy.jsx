import { Container } from "react-bootstrap";
import Title from "../../components/title_component/title";
import BreadcrumbComponent from "../../components/breadcrumb_component/breadcrumb";
import { FaHome } from "react-icons/fa";

import styles from "./privacy&policy.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Privacy&Policy" },
];

export default function PrivacyAndPolicy() {
  Title("Privacy&Policy");

  return (
    <Container className={`privacy-wrapper ${styles["privacyWrapperStyle"]}`}>
      <div className="breadcrumb-content py-3">
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <p>Privacy Content.</p>
    </Container>
  );
}
