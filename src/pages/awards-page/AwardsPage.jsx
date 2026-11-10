import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import AwardsComponent from "../../components/awards-component/AwardsComponent";
import TitleComponent from "../../components/title-component/TitleComponent";
import styles from "./awards-page.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "The Shija Story", href: "/company-overview" },
  { label: "Awards & Accolades", href: "/awards" },
];

export default function AwardsPage() {
  TitleComponent("Awards & Accolades");

  return (
    <Container className={styles.pageWrapperStyle}>
      <div className={styles.breadcrumb}>
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <AwardsComponent />
    </Container>
  );
}
