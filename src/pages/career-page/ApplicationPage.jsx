import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import {
  FaArrowLeft,
  FaBriefcase,
  FaCalendarDays,
  FaCircleCheck,
  FaPeopleGroup,
} from "react-icons/fa6";
//import { getVacancy } from "../../services/api/vacancy_api";
//import { postRecruitment } from "../../services/api/recruitment_api";
import styles from "./application.module.css";
import careerStyles from "./career.module.css";

const EMPTY_FORM = {
  full_name: "",
  email: "",
  phone_number: "",
  address: "",
  qualification: "",
  experience: "0",
  father_name: "",
  mother_name: "",
  number_of_siblings: "0",
};

export default function ApplicationPage() {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchVacancy = async () => {
      try {
        const response = await getVacancy();
        if (!Array.isArray(response)) {
          throw new Error("Unexpected vacancy data received.");
        }

        const currentVacancy = response.find(
          (item) => String(item.id) === String(id),
        );

        if (!currentVacancy) {
          throw new Error("This opening is unavailable or no longer accepting applications.");
        }

        if (!cancelled) setVacancy(currentVacancy);
      } catch (error) {
        if (!cancelled) {
          setLoadError(error.message || "Unable to load this opening.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchVacancy();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setSubmitError("");
  };

  const handleFileChange = (event, setFile) => {
    const file = event.target.files?.[0] ?? null;
    if (file && file.size > 5 * 1024 * 1024) {
      event.target.value = "";
      setFile(null);
      setSubmitError("Each uploaded file must be 5 MB or smaller.");
      return;
    }

    setFile(file);
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!vacancy) return;

    setSubmitting(true);
    setSubmitError("");

    const application = new FormData();
    application.append("vacancy", String(vacancy.id));
    Object.entries(form).forEach(([key, value]) => application.append(key, value));
    if (photo) application.append("photo", photo);
    if (resume) application.append("resume", resume);

    try {
      await postRecruitment(application);
      setSubmitted(true);
      setForm(EMPTY_FORM);
      setPhoto(null);
      setResume(null);
    } catch (error) {
      setSubmitError(error.message || "Unable to submit your application.");
    } finally {
      setSubmitting(false);
    }
  };

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

  return (
    <>
      <section
        className={`${careerStyles.careerListSectionStyle} ${styles.applicationHero}`}
      >
        <Container className={styles.heroContent}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item href="/careers" className={careerStyles.breadcrumbItem}>
              Careers
            </Breadcrumb.Item>
            <Breadcrumb.Item
              href="/careers/openings"
              className={careerStyles.breadcrumbItem}
            >
              Open positions
            </Breadcrumb.Item>
            <Breadcrumb.Item active className={careerStyles.breadcrumbItem}>
              Application
            </Breadcrumb.Item>
          </Breadcrumb>
          <span className={careerStyles.eyebrow}>Your next step</span>
          <h1>Apply to join our team.</h1>
          <p>Tell us about yourself and the experience you’ll bring to Shija.</p>
        </Container>
      </section>

      <main className={styles.applicationMain}>
        <Container>
          {loading ? (
            <div className={styles.statePanel} role="status">
              <Spinner animation="border" variant="success" />
              <span>Loading opening details...</span>
            </div>
          ) : loadError ? (
            <div className={styles.statePanel}>
              <Alert variant="warning" className="w-100">
                {loadError}
              </Alert>
              <Button variant="outline-success" href="/careers/openings">
                <FaArrowLeft aria-hidden="true" /> Back to openings
              </Button>
            </div>
          ) : submitted ? (
            <div className={styles.successPanel} role="status">
              <FaCircleCheck aria-hidden="true" />
              <h2>Application submitted</h2>
              <p>
                Thank you for applying for <strong>{vacancy.title}</strong>.
                Your application has been received.
              </p>
              <Button variant="success" href="/careers/openings">
                Browse other openings
              </Button>
            </div>
          ) : (
            <Row className="g-4 g-lg-5 align-items-start">
              <Col xs={12} lg={4}>
                <aside className={styles.vacancyCard}>
                  <span className={styles.cardEyebrow}>Applying for</span>
                  <h2>{vacancy.title}</h2>
                  <div className={styles.vacancyMeta}>
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
                  <div className={styles.vacancyDetails}>
                    <h3>
                      <FaBriefcase aria-hidden="true" /> About this role
                    </h3>
                    <p>{vacancy.details}</p>
                  </div>
                  <Link to="/careers/openings" className={styles.backLink}>
                    <FaArrowLeft aria-hidden="true" /> Back to all openings
                  </Link>
                </aside>
              </Col>

              <Col xs={12} lg={8}>
                <section className={styles.formCard}>
                  <div className={styles.formHeading}>
                    <span className={styles.cardEyebrow}>Candidate details</span>
                    <h2>Application form</h2>
                    <p>
                      Fields marked with <span aria-hidden="true">*</span> are
                      required.
                    </p>
                  </div>

                  {submitError && (
                    <Alert variant="danger" role="alert">
                      {submitError}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <div className={styles.formSection}>
                      <h3>Personal information</h3>
                      <Row className="g-3">
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-name">
                            <Form.Label>Full name *</Form.Label>
                            <Form.Control
                              name="full_name"
                              value={form.full_name}
                              onChange={handleChange}
                              maxLength={160}
                              autoComplete="name"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-email">
                            <Form.Label>Email address *</Form.Label>
                            <Form.Control
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleChange}
                              maxLength={254}
                              autoComplete="email"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-phone">
                            <Form.Label>Phone number *</Form.Label>
                            <Form.Control
                              name="phone_number"
                              type="tel"
                              value={form.phone_number}
                              onChange={handleChange}
                              maxLength={15}
                              autoComplete="tel"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-qualification">
                            <Form.Label>Highest qualification *</Form.Label>
                            <Form.Control
                              name="qualification"
                              value={form.qualification}
                              onChange={handleChange}
                              maxLength={160}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group controlId="applicant-address">
                            <Form.Label>Address *</Form.Label>
                            <Form.Control
                              name="address"
                              as="textarea"
                              rows={3}
                              value={form.address}
                              onChange={handleChange}
                              autoComplete="street-address"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    <div className={styles.formSection}>
                      <h3>Background</h3>
                      <Row className="g-3">
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-experience">
                            <Form.Label>Experience (years) *</Form.Label>
                            <Form.Control
                              name="experience"
                              type="number"
                              min="0"
                              step="1"
                              value={form.experience}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-siblings">
                            <Form.Label>Number of siblings *</Form.Label>
                            <Form.Control
                              name="number_of_siblings"
                              type="number"
                              min="0"
                              step="1"
                              value={form.number_of_siblings}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-father">
                            <Form.Label>Father&apos;s name *</Form.Label>
                            <Form.Control
                              name="father_name"
                              value={form.father_name}
                              onChange={handleChange}
                              maxLength={160}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-mother">
                            <Form.Label>Mother&apos;s name *</Form.Label>
                            <Form.Control
                              name="mother_name"
                              value={form.mother_name}
                              onChange={handleChange}
                              maxLength={160}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    <div className={styles.formSection}>
                      <h3>Documents</h3>
                      <Row className="g-3">
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-resume">
                            <Form.Label>Resume (PDF)</Form.Label>
                            <Form.Control
                              type="file"
                              accept=".pdf,application/pdf"
                              onChange={(event) =>
                                handleFileChange(event, setResume)
                              }
                            />
                            <Form.Text>
                              PDF format recommended. Maximum file size 5 MB.
                            </Form.Text>
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group controlId="applicant-photo">
                            <Form.Label>Photo (optional)</Form.Label>
                            <Form.Control
                              type="file"
                              accept="image/*"
                              onChange={(event) =>
                                handleFileChange(event, setPhoto)
                              }
                            />
                            <Form.Text>
                              Image file recommended. Maximum file size 5 MB.
                            </Form.Text>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    <div className={styles.submitRow}>
                      <Button
                        type="submit"
                        variant="success"
                        size="lg"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              aria-hidden="true"
                            />{" "}
                            Submitting...
                          </>
                        ) : (
                          "Submit application"
                        )}
                      </Button>
                      <span>
                        Please review your details before submitting.
                      </span>
                    </div>
                  </Form>
                </section>
              </Col>
            </Row>
          )}
        </Container>
      </main>
    </>
  );
}
