import { useEffect } from "react";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

import styles from "./directors.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Directors", href: "/directors" },
];

export default function DirectorsPage() {
  TitleComponent("Directors");

  return (
    <div className={`director-wrapper ${styles["directorWrapperStyles"]}`}>
      <Container>
        <div className="director-header">
          <div className="mb-3">
            {/* breadcrumb section */}
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
      </Container>
    </div>
  );
}
