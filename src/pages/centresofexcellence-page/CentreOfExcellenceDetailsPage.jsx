import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import TitleComponent from "../../components/title-component/TitleComponent";
import { getCoeData, getCoeUrl } from "../../services/apiService";
import { htmlToText } from "../../utils/htmlToText";
import styles from "./centres_of_excellence.module.css";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Centres of Excellence", href: "/centres_of_excellence" },
  { label: "Details" },
];

function getCentreImage(item) {
  const image = item.image || item.thumnail;
  if (typeof image !== "string" || !image) return "";
  if (/^(https?:)?\/\//i.test(image) || image.startsWith("/")) return image;
  return getCoeUrl(image);
}

function getIdentifier(item, index) {
  return String(item.id ?? item.slug ?? item.name ?? `index-${index}`);
}

export default function CentreOfExcellenceDetailsPage() {
  const { coeId } = useParams();
  const [centre, setCentre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  TitleComponent(centre?.name || centre?.title || "Centre of Excellence");

  useEffect(() => {
    let active = true;

    const fetchCentre = async () => {
      try {
        const response = await getCoeData();
        const centres = Array.isArray(response?.msg) ? response.msg : [];
        const matchedCentre = centres.find(
          (item, index) => getIdentifier(item, index) === coeId,
        );

        if (active) {
          if (matchedCentre) {
            setCentre({
              ...matchedCentre,
              image: getCentreImage(matchedCentre),
            });
          } else {
            setError("Centre of Excellence not found.");
          }
        }
      } catch (fetchError) {
        if (active) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to load Centre of Excellence details.",
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchCentre();
    return () => {
      active = false;
    };
  }, [coeId]);

  const title = centre?.name || centre?.title || "Centre of Excellence";
  const description =
    centre?.body || centre?.description || centre?.summary || "";

  return (
    <div className={styles.coeDetailsPage}>
      <Container>
        <div className={styles.coeBreadcrumb}>
          <BreadcrumbComponent items={breadcrumbItems} />
        </div>
        {loading ? (
          <p role="status">Loading Centre of Excellence details...</p>
        ) : error ? (
          <div role="alert">
            <p>{error}</p>
            <Link to="/centres_of_excellence">Back to all Centres</Link>
          </div>
        ) : (
          <article className={styles.coeDetailsCard}>
            {centre.image && (
              <img
                className={styles.coeDetailsImage}
                src={centre.image}
                alt={title}
              />
            )}
            <div className={styles.coeDetailsContent}>
              <h1>{title}</h1>
              {description && <p>{htmlToText(String(description))}</p>}
              <Link to="/centres_of_excellence">Back to all Centres</Link>
            </div>
          </article>
        )}
      </Container>
    </div>
  );
}
