import { useRef, useState, useEffect } from "react";
import styles from "./discover.module.css";
import { Button, Image } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getCoeData, getCoeUrl } from "../../services/apiService";
import ButtonComponent from "../button_component/ButtonComponent";

export default function DiscoverComponent() {
  const [coeData, setCoeData] = useState([]);
  const [error, setError] = useState(null);
  const bodyRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
        if (discoverData?.status === "success" && Array.isArray(discoverData.msg)) {
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
          err instanceof Error ? err.message : "Unable to load discover content.",
        );
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div role="alert">{error}</div>;
  }

  const discovers = coeData.slice(0, 5);

  return (
    <div className={`discover-wrapper ${styles.discoverWrapperStyles}`}>
      {/* 🔹 DISCOVER HEADERS (Horizontal) */}
      <div className="d-flex gap-4 mb-3 overflow-auto">
        {discovers.map((item, index) => (
          <div key={`header-${item.id}`}>
            <ButtonComponent 
              variant="warning"
              size="lg"
              label={item.name}
              onClick={() => scrollToBody(index)}
            />
          </div>
        ))}
      </div>

      {/* 🔹 BODY + NAVIGATORS */}
      <div className="d-flex align-items-center position-relative">
        {/* ◀ LEFT NAV */}
        <Button
          variant="light"
          className="me-2 shadow-sm"
          disabled={currentIndex === 0}
          onClick={() => scrollToBody(currentIndex - 1)}
          style={{
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
          }}
        >
          <FaChevronLeft size={24} />
        </Button>

        {/* 🔹 SCROLL CONTAINER */}
        <div className={`discover-body ${styles["discoverBodyStyles"]}`}>
          {discovers.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (bodyRefs.current[index] = el)}
              className="discover-body bg-light rounded d-flex p-4 shadow-sm"
              style={{ minWidth: "64rem" }}
            >
              <div className="discover-image me-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className={`rounded ${styles.discoverImageStyles}`}
                  fluid
                  style={{
                    maxWidth: "25rem",
                    height: "25rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="discover-content">
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ▶ RIGHT NAV */}
        <Button
          variant="light"
          className="ms-2 shadow-sm"
          disabled={currentIndex >= discovers.length - 1}
          onClick={() => scrollToBody(currentIndex + 1)}
          style={{
            cursor: currentIndex >= discovers.length - 1 ? "not-allowed" : "pointer",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
          }}
        >
          <FaChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
}
