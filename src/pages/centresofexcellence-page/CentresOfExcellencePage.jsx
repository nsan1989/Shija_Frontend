import { useEffect, useState } from "react";
import TitleComponent from "../../components/title-component/TitleComponent";
import BreadcrumbComponent from "../../components/breadcrumb-component/BreadcrumbComponent";
import SearchComponent from "../../components/search-component/SearchComponent";
import { FaHome } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./centres_of_excellence.module.css";
import SectionHeaderComponent from "../../components/section-header-component/SectionHeaderComponent";
import CardComponent from "../../components/card-component/CardComponent";
import { getCoeData, getCoeUrl } from "../../services/apiService";
import { htmlToText } from "../../utils/htmlToText";

function getCentreImage(item) {
  const image = item.image || item.thumnail;
  if (typeof image !== "string" || !image) return "";
  if (/^(https?:)?\/\//i.test(image) || image.startsWith("/")) return image;
  return getCoeUrl(image);
}

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "Centres of Excellence", href: "/centres_of_excellence" },
];

export default function CentresOfExcellencePage() {
  TitleComponent("Centres of Excellence");

  const [ceoData, setCeoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCoeData();
        setCeoData(
          Array.isArray(data?.msg)
            ? data.msg.map((item) => ({
                ...item,
                image: getCentreImage(item),
              }))
            : [],
        );
      } catch (fetchError) {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Unable to load Centres of Excellence.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      className={styles.pageWrapperStyle}
    >
      <div className="centres-of-excellence-header">
        <div className="mb-3">
          {/* breadcrumb section */}
          <BreadcrumbComponent items={breadcrumbItems} />
        </div>
        <div className={`header-wrapper mb-3 ${styles["headerWrapperStyle"]}`}>
          <SectionHeaderComponent
            title="Centres of Excellence"
            subtitle="Our Centres of Excellence bring together multidisciplinary teams to
            deliver precise diagnosis, advanced treatments, and superior
            outcomes across a wide spectrum of medical specialties."
          />
        </div>
        <div>
          <Row className="d-flex align-items-center">
            <Col lg={8}>
              <SearchComponent placeholder="Search for Doctors, Specialities, Or Conditions" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="centres-of-excellence-content my-4">
        <div className={`coe_content_heading ${styles["contentHeadingStyle"]}`}>
          <h5>Explore Our Centres of Excellence</h5>
        </div>
        <div className="coe_content mt-4">
          {loading ? (
            <p role="status">Loading Centres of Excellence...</p>
          ) : error ? (
            <p role="alert">Unable to load Centres of Excellence: {error}</p>
          ) : ceoData.length > 0 ? (
            <div className={styles.coeGrid}>
              {ceoData.map((item, index) => {
                const title = item.name || item.title || "Centre of Excellence";
                const identifier = item.id ?? item.slug ?? item.name ?? `index-${index}`;
                const description =
                  item.short_description || item.summary || item.body || "";

                return (
                  <CardComponent
                    key={item.id || item.slug || `${title}-${index}`}
                    className={styles.coeCard}
                    image={item.image}
                    showImagePlaceholder
                    title={title}
                    text={description ? htmlToText(String(description)) : ""}
                    link={`/centres_of_excellence/${encodeURIComponent(identifier)}`}
                  />
                );
              })}
            </div>
          ) : (
            <p>No Centres of Excellence are available.</p>
          )}
        </div>
      </div>
    </Container>
  );
}
