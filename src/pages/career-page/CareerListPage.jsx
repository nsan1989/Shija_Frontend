import { useEffect, useState } from "react";
import { Alert, Breadcrumb, Button, Container, Spinner } from "react-bootstrap";
import {
  FaArrowRight,
  FaBriefcase,
  FaCalendarDays,
  FaPeopleGroup,
} from "react-icons/fa6";
import styles from "./career.module.css";
//import { getVacancy } from "../../services/api/vacancy_api";

export default function CareerListPage() {
  const [vacancies, setVacancies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchVacancies = async () => {
      try {
//        const response = await getVacancy();
        if (!Array.isArray(response)) {
          throw new Error("Unexpected vacancy data received.");
        }
        if (!cancelled) setVacancies(response);
      } catch (fetchError) {
        if (!cancelled) {
          setError(fetchError.message || "Unable to load current openings.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchVacancies();
    return () => {
      cancelled = true;
    };
  }, []);

  const formatDeadline = (date) => {
    if (!date) return "Not specified";
    const parsedDate = new Date(`${date}T00:00:00`);
    return Number.isNaN(parsedDate.getTime())
      ? date
      : parsedDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  };

  const scrollToOpenings = () => {
    document
      .getElementById("job-list")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className={`${styles.careerListSectionStyle} ${styles.openingsHero}`}>
        <Container className={styles.openingsHeroContent}>
          <Breadcrumb className={styles.openingsBreadcrumb}>
            <Breadcrumb.Item href="/careers" className={styles.breadcrumbItem}>
              Careers
            </Breadcrumb.Item>
            <Breadcrumb.Item active className={styles.breadcrumbItem}>
              Open positions
            </Breadcrumb.Item>
          </Breadcrumb>
          <span className={styles.eyebrow}>Careers at Shija</span>
          <h1>Do work that makes a difference.</h1>
          <p>
            Find your next opportunity and help us build a healthier future for
            our community.
          </p>
          <Button
            variant="warning"
            size="lg"
            className={styles.primaryAction}
            onClick={scrollToOpenings}
          >
            View open positions <FaArrowRight aria-hidden="true" />
          </Button>
        </Container>
      </section>

      <section id="job-list" className={styles.openingsSection}>
        <Container>
          <div className={styles.openingsHeading}>
            <div>
              <span className={styles.sectionEyebrow}>Join our team</span>
              <h2>Current opportunities</h2>
              <p>
                Explore our open roles and take the next step in your career.
              </p>
            </div>
            {!loading && !error && (
              <span className={styles.openingCount}>
                {vacancies.length} {vacancies.length === 1 ? "position" : "positions"}
              </span>
            )}
          </div>

          {loading ? (
            <div className={styles.openingsState} role="status">
              <Spinner animation="border" variant="success" />
              <span>Loading open positions...</span>
            </div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : vacancies.length === 0 ? (
            <div className={styles.openingsState}>
              <span className={styles.emptyIcon}>
                <FaBriefcase aria-hidden="true" />
              </span>
              <h3>No open positions right now</h3>
              <p>
                We don’t have any current openings, but please check back soon
                for new opportunities.
              </p>
              <Button variant="outline-success" href="/career">
                Back to careers
              </Button>
            </div>
          ) : (
            <div className={styles.openingGrid}>
              {vacancies.map((vacancy) => (
                <article className={styles.openingCard} key={vacancy.id}>
                  <div className={styles.openingCardHeader}>
                    <span className={styles.openRoleBadge}>Open position</span>
                    <h3>{vacancy.title}</h3>
                  </div>
                  <div className={styles.openingMeta}>
                    <span>
                      <FaPeopleGroup aria-hidden="true" />
                      {vacancy.number_of_vacancies}{" "}
                      {Number(vacancy.number_of_vacancies) === 1
                        ? "vacancy"
                        : "vacancies"}
                    </span>
                    <span>
                      <FaCalendarDays aria-hidden="true" />
                      Apply by {formatDeadline(vacancy.last_date)}
                    </span>
                  </div>
                  <p className={styles.openingDetails}>{vacancy.details}</p>
                  <div className={styles.openingCardFooter}>
                    <Button
                      variant="success"
                      href={`/career/openings/${vacancy.id}/application`}
                    >
                      Apply for this role <FaArrowRight aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
