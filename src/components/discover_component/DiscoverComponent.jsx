import { useRef, useState, useEffect } from "react";
import styles from "./discover.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getCoeData, getCoeUrl } from "../../services/apiService";
import ButtonComponent from "../button_component/ButtonComponent";
import CardComponent from "../card_component/CardComponent";

export default function DiscoverComponent() {
  const [coeData, setCoeData] = useState([]);
  const [error, setError] = useState(null);
  const bodyRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const discovers = coeData.slice(0, 5);

  const scrollToBody = (index) => {
    if (index < 0 || index >= discovers.length) return;
    bodyRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setCurrentIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const discoverData = await getCoeData();
        if (
          discoverData?.status === "success" &&
          Array.isArray(discoverData.msg)
        ) {
          setCoeData(
            discoverData.msg.map((item) => ({
              ...item,
              image: item.image || getCoeUrl(item.thumnail),
            })),
          );
        } else {
          setError("Unable to load discover content.");
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load discover content.",
        );
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div role="alert">{error}</div>;
  }

  return (
    <div className={`discover-wrapper ${styles.discoverWrapperStyles}`}>
      <div className={styles.discoverHeader}>
        <div className={styles.discoverTabs}>
          {discovers.map((item, index) => (
            <div key={`header-${item.id}`}>
              <ButtonComponent
                variant="success"
                size="lg"
                label={item.name}
                onClick={() => scrollToBody(index)}
                style={{
                  backgroundColor:
                    currentIndex === index ? "var(--primary-color)" : "#fff",
                  borderColor: "var(--primary-color)",
                  color: currentIndex === index ? "#fff" : "var(--primary-color)",
                }}
              />
            </div>
          ))}
        </div>
        <div className={styles.discoverControls}>
          <ButtonComponent
            variant="success"
            disabled={currentIndex === 0}
            onClick={() => scrollToBody(currentIndex - 1)}
            style={{
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            icon={<FaChevronLeft />}
          />
          <ButtonComponent
            variant="success"
            disabled={currentIndex >= discovers.length - 1}
            onClick={() => scrollToBody(currentIndex + 1)}
            style={{
              cursor:
                currentIndex >= discovers.length - 1
                  ? "not-allowed"
                  : "pointer",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            icon={<FaChevronRight />}
          />
        </div>
      </div>

      <div className={styles.discoverBodyStyles}>
        {discovers.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (bodyRefs.current[index] = el)}
            className={styles.discoverSlide}
          >
            <CardComponent
              variant="left"
              image={item.image}
              text={item.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
