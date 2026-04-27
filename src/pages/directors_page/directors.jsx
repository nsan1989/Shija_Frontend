import { useEffect } from "react";
import Title from "../../components/title_component/title";
import BreadcrumbComponent from "../../components/breadcrumb_component/breadcrumb";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

import styles from "./directors.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Directors", href: "/directors" },
];

export default function DirectorsPage() {
  Title("Directors");

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
