import styles from "./career.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import { FaHome } from "react-icons/fa";
import {
  FaArrowRight,
  FaHeartPulse,
  FaPeopleGroup,
  FaRocket,
} from "react-icons/fa6";

const breadcrumbItems = [
  { label: "Home", href: "/", icon: <FaHome /> },
  { label: "Careers" },
];

export default function CareerPage() {
  TitleComponent("Careers");
  return (
    <>
      <section className={styles.careerSectionStyle}>
        <Container className={styles.headerContentStyle}>
          <div className={styles.heroBreadcrumb}>
            <BreadcrumbComponent items={breadcrumbItems} />
          </div>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Careers at Shija</span>
            <h1>Make a career of making a difference.</h1>
            <p>
              Bring your talent to a team where compassionate care, curiosity,
              and growth come together to make a lasting impact.
            </p>
            <div className={styles.heroActions}>
              <Button
                variant="warning"
                size="lg"
                href="/careers/openings"
                className={styles.primaryAction}
              >
                Explore open positions <FaArrowRight aria-hidden="true" />
              </Button>
              <a className={styles.secondaryAction} href="#our-story">
                Discover Shija
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="our-story" className={styles.aboutSectionStyle}>
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            <Col xs={12} lg={4}>
              <span className={styles.sectionEyebrow}>Who we are</span>
              <h2 className={styles.sectionTitle}>
                Care that moves us forward.
              </h2>
              <p className={styles.storyLead}>
                Since 1985, Shija Hospitals and Research Institute has grown
                with a belief that better healthcare begins with people.
              </p>
            </Col>
            <Col xs={12} lg={8}>
              <p className={styles.storyBody}>
                Established in 1985, Shija Hospitals and Research Institute
                (SHRI) has evolved from a mono-practice clinic attached to a
                pharmacy at Paona Bazar, Imphal, into a 350-bedded
                multi-specialty hospital with 37 specialties and
                super-specialties. Located in the eco-friendly foothills of
                Langol, SHRI offers secondary and tertiary healthcare services
                equipped with a strong 1590 team that contains 162 full-time
                doctors and an Emergency and Trauma Center backed by 30 clinical
                departments, 78 critical care beds, and diagnostic services to
                guarantee immediate and extensive treatment of critical cases.
                Shija now has the first home grown medical college in North
                Eastern India, Shija Academy of Health Sciences (SAHS) with 150
                students intake per year from 2021- 2022. Shija takes pride in
                being the first NABH accredited medical college hospital in the
                entire North East India and the second in Eastern India (13
                states). Shija Hospitals successfully conducted the first
                deceased kidney transplantation in the North Eastern India on
                2nd August 2023, followed by the second on 11th October, 2023.
                To contribute to global healthcare, SHRI envisions to be a
                premium and leading brand in healthcare services globally by
                2029, recognized by our customers for our holistic approach,
                personal touch, and technological advancement.
              </p>
            </Col>
          </Row>
          <div className={styles.factGrid}>
            <article className={styles.factCard}>
              <strong>350</strong>
              <span>beds serving our community</span>
            </article>
            <article className={styles.factCard}>
              <strong>37</strong>
              <span>specialties and super-specialties</span>
            </article>
            <article className={styles.factCard}>
              <strong>78</strong>
              <span>critical care beds</span>
            </article>
            <article className={styles.factCard}>
              <strong>1985</strong>
              <span>the beginning of our journey</span>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.lifeContentStyle}>
        <Container>
          <div className={styles.lifeIntro}>
            <span className={styles.sectionEyebrow}>Life at Shija</span>
            <h2 className={styles.sectionTitle}>
              Meaningful work. Shared purpose.
            </h2>
            <p>
              Every role contributes to a more thoughtful, connected healthcare
              experience for our patients and community.
            </p>
          </div>
          <Row className="g-4">
            <Col xs={12} md={4}>
              <article className={styles.valueCard}>
                <span className={styles.valueIcon}>
                  <FaHeartPulse aria-hidden="true" />
                </span>
                <h3>Make an impact</h3>
                <p>
                  Put your skills to work in an organization focused on
                  delivering care across the North East.
                </p>
              </article>
            </Col>
            <Col xs={12} md={4}>
              <article className={styles.valueCard}>
                <span className={styles.valueIcon}>
                  <FaPeopleGroup aria-hidden="true" />
                </span>
                <h3>Grow together</h3>
                <p>
                  Collaborate with colleagues across clinical, academic, and
                  support teams.
                </p>
              </article>
            </Col>
            <Col xs={12} md={4}>
              <article className={styles.valueCard}>
                <span className={styles.valueIcon}>
                  <FaRocket aria-hidden="true" />
                </span>
                <h3>Keep learning</h3>
                <p>
                  Be part of a community shaped by curiosity, research, and
                  continuous progress.
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.aboutContentStyle}>
        <Container>
          <div className={styles.jobsCallout}>
            <div>
              <span className={styles.sectionEyebrow}>Take the next step</span>
              <h2>Find your place at Shija.</h2>
              <p>
                Explore current opportunities and discover where your experience
                can make a difference.
              </p>
            </div>
            <Button variant="warning" size="lg" href="/careers/openings">
              View open positions <FaArrowRight aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
