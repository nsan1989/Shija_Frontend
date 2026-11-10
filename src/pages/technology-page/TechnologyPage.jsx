import { useState } from "react";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import styles from "./technology.module.css";
import PageHeaderComponent from "../../components/page-header-component/PageHeaderComponent";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const technologies = [];

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Technology", href: "" },
];

export default function TechnologyPage() {
  TitleComponent("Technology");
  const [selectedLetter, setSelectedLetter] = useState("A");
  const filteredTechnologies = technologies.filter((technology) =>
    technology.toUpperCase().startsWith(selectedLetter),
  );

  return (
    <Container className={styles.pageWrapperStyle}>
      <div className="mb-3">
        {/* breadcrumb section */}
        <BreadcrumbComponent items={breadcrumbItems} />
      </div>
      <PageHeaderComponent
        title="all technologies"
        subtitle="list of all technologies"
      />
      <section className={styles.technologySection}>
        <h2 className={styles.sectionTitle}>Find Technologies by Alphabet</h2>
        <div
          className={styles.alphabetTabs}
          role="group"
          aria-label="Filter technologies by first letter"
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
        <div className={styles.technologyTabPanel} aria-live="polite">
          <h3 className={styles.resultsTitle}>
            Technologies starting with {selectedLetter}
          </h3>
          {filteredTechnologies.length > 0 ? (
            <ul className={styles.technologyList}>
              {filteredTechnologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyState}>
              No technology available for {selectedLetter}.
            </p>
          )}
        </div>
      </section>
    </Container>
  );
}
