import styles from "./career.module.css";
import { Container } from "react-bootstrap";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import { FaHome } from "react-icons/fa";
import { div } from "three/tsl";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Careers", href: "" },
];

export default function CareerPage() {
    TitleComponent("Careers");
    return (
        <div className={`career-wrapper ${styles["careerWrapperStyle"]}`}>
            <Container>
                <div className="career-header">
                    <BreadcrumbComponent items={breadcrumbItems} />
                </div>
            </Container>
        </div>
    )
}