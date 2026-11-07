import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAwardsAndAccoladesData } from "../../services/apiService";
import { htmlToText } from "../../utils/htmlToText";
import styles from "./awards.module.css";

const PREVIEW_COUNT = 3;

export default function AwardsComponent({ preview = false }) {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const fetchAwards = async () => {
      try {
        const data = await getAwardsAndAccoladesData();
        if (active) {
          setAwards(Array.isArray(data?.msg) ? data.msg : []);
        }
      } catch (fetchError) {
        if (active) {
          setError(fetchError.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchAwards();

    return () => {
      active = false;
    };
  }, []);

  const visibleAwards = preview ? awards.slice(0, PREVIEW_COUNT) : awards;

  return (
    <section className={styles.awardsSection} aria-labelledby="awards-heading">
      <header className={styles.awardsHeader}>
        <div>
          <span className={styles.eyebrow}>Recognition</span>
          <h2 id="awards-heading">Awards &amp; Accolades</h2>
          <p>Milestones that reflect our commitment to better healthcare.</p>
        </div>
      </header>

      {loading ? (
        <p className={styles.statusMessage} role="status">Loading awards...</p>
      ) : error ? (
        <p className={styles.statusMessage} role="alert">
          Unable to load awards: {error}
        </p>
      ) : awards.length > 0 ? (
        <div className={styles.awardsGrid}>
          {visibleAwards.map((award, index) => (
            <article
              className={styles.awardCard}
              key={award.id || award.year || index}
            >
              <span className={styles.awardNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                {award.year && <h3 className={styles.awardYear}>{award.year}</h3>}
                <p className={styles.awardText}>{htmlToText(award.text)}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className={styles.statusMessage}>No awards data available.</p>
      )}
      {preview && awards.length > 0 && (
        <div className={styles.viewAllWrap}>
          <Link className={styles.viewAllLink} to="/awards">
            View all awards <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
