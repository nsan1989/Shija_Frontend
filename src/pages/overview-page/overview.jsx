import { useEffect } from "react";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import { FaHome } from "react-icons/fa";
import { Container } from "react-bootstrap";
import styles from "./overview.module.css";
import { useLocation } from "react-router-dom";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "The Shija Story", href: "/the_shija_story" },
];

export default function Overview() {
  TitleComponent("The Shija Story");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const section = params.get("section");

  const OverviewSection = () => (
    <div id="overview">
      <div className={styles.titleStyle}>
        <h3>overview</h3>
      </div>
      <div className={styles.contentStyle}>
        <p>This is the overview content.</p>
      </div>
    </div>
  );

  const VisionMission = () => (
    <div id="vision">
      <div className={styles.titleStyle}>
        <h3>vision & mission</h3>
      </div>
      <div className={styles.contentStyle}>
        <p>This is the vision & mission content.</p>
      </div>
    </div>
  );

  const Anthem = () => (
    <div id="anthem">
      <div  className={styles.titleStyle}>
        <h3>anthem</h3>
      </div>
      <div className={styles.contentStyle}>
        <p>This is the anthem content.</p>
      </div>
    </div>
  );

  const Awards = () => (
    <div id="awards">
      <div  className={styles.titleStyle}>
        <h3>awards</h3>
      </div>
      <div className={styles.contentStyle}>
        <p>This is the awards content.</p>
      </div>
    </div>
  );

  const Achievements = () => (
    <div id="achievements">
      <div  className={styles.titleStyle}>
        <h3>achievements</h3>
      </div>
      <div className={styles.contentStyle}>
        <p>This is the achievements content.</p>
      </div>
    </div>
  );

  useEffect(() => {
  if (location.hash) {
    const el = document.getElementById(location.hash.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return (
    <div className={`overview-wrapper ${styles[`overviewWrapperStyles`]}`}>
      <Container>
        <div className="overview-header">
          <div className="mb-3">
            {/* breadcrumb section */}
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
        </div>
        <div className="overview-content">
          <OverviewSection />
          <VisionMission />
          <Anthem />
          <Awards />
          <Achievements />
        </div>
      </Container>
    </div>
  );
}
