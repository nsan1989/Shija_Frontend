import { Container } from "react-bootstrap";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import { FaHome } from "react-icons/fa";

import styles from "./privacy&policy.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Privacy&Policy" },
];

export default function PrivacyAndPolicy() {
  TitleComponent("Privacy&Policy");

  return (
    <Container className={`privacy-wrapper ${styles["privacyWrapperStyle"]}`}>
      <div className="breadcrumb-content py-3">
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <p>Privacy Content.</p>
    </Container>
  );
}
