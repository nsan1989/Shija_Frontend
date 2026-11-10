import { useState } from "react";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import styles from "./treatment.module.css";
import PageHeaderComponent from "../../components/page-header-component/PageHeaderComponent";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const treatments = [];

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Treatment", href: "" },
];

export default function TreatmentPage() {
  TitleComponent("Treatment");
  const [selectedLetter, setSelectedLetter] = useState("A");
  const filteredTreatments = treatments.filter((treatment) =>
    treatment.toUpperCase().startsWith(selectedLetter),
  );

  return (
    <Container className={styles.pageWrapperStyle}>
      <div className="mb-3">
        {/* breadcrumb section */}
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <PageHeaderComponent
        title="all treatments"
        subtitle="list of all treatments"
      />
      <section className={styles.treatmentSection}>
        <h2 className={styles.sectionTitle}>Find Treatments by Alphabet</h2>
        <div
          className={styles.alphabetTabs}
          role="group"
          aria-label="Filter treatments by first letter"
        >
          {alphabets.map((letter) => (
            <button
              key={letter}
              type="button"
              aria-pressed={selectedLetter === letter}
              className={`${styles.alphabetTab} ${selectedLetter === letter ? styles.activeAlphabetTab : ""}`}
              onClick={() => setSelectedLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className={styles.treatmentTabPanel} aria-live="polite">
          <h3 className={styles.resultsTitle}>
            Treatments starting with {selectedLetter}
          </h3>
          {filteredTreatments.length > 0 ? (
            <ul className={styles.treatmentList}>
              {filteredTreatments.map((treatment) => (
                <li key={treatment}>{treatment}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyState}>
              No treatments available for {selectedLetter}.
            </p>
          )}
        </div>
      </section>
    </Container>
  );
}
