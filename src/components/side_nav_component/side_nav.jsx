import { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import styles from "./side_nav.module.css";
import doctor from "../../assets/icons/doctor-icon.png";
import lab from "../../assets/icons/lab-icon.png";
import health from "../../assets/icons/health_check-icon.png";
import home from "../../assets/icons/home_care-icon.png";
import navigation from "../../assets/icons/navigation-icon.png";

const navLinks = [
  {
    name: "Book Appointment",
    icon: doctor,
    path: "http://103.72.216.194:8001/PatientPortal/TentativeAppointment/TentativeAppointment",
  },
  {
    name: "Lab Report",
    icon: lab,
    path: "http://103.72.216.194:9000/shijareport/",
  },
  {
    name: "Book Health Check",
    icon: health,
    path: "/health-check",
  },
  {
    name: "Book Home Care",
    icon: home,
    path: "/home-care",
  },
  {
    name: "Navigate",
    icon: navigation,
    path: "/navigate",
  },
];

const navMobileLinks = [
  {
    icon: navigation,
    path: "/navigate",
  },
];

export function useScrollVisibility() {
  const [visible, setVisible] = useState(false);
  const threshold = window.innerHeight * 0.7;

  useEffect(() => {
    const handleScroll = () => {
      const isWideScreen = window.innerWidth > 768;
      const scrolledBeyondViewport = window.scrollY < threshold;

      setVisible(isWideScreen && scrolledBeyondViewport);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return visible;
}

export default function SideNav() {

  const isVisible = useScrollVisibility();

  if (isVisible) return null;

  return (
    <>
      {/* Desktop view */}
      <div className={`desktop-sideNav-wrapper d-none d-lg-flex ${styles.desktopSideNavWrapperStyles}`}>
        <Row className={styles.desktopSideNavContentStyles}>
          {navLinks.map((link, index) => (
            <Col
              key={index}
              xs={12}
              className={`p-2 ${styles['desktopSideNavItem']}`}
            >
              <a href={link.path} target="_blank" className={styles.desktopSideNavLink}>
                <div className={`desktopIconWrapper ${styles['desktopIconWrapperStyles']}`}>
                  <Image src={link.icon} style={{ width: "1.5rem" }} />
                </div>
                <span className={styles.desktopSideNavText}>{link.name}</span>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    {/* Mobile view */}
      <div className={`mobile-sideNav-wrapper d-lg-none ${styles.mobileSideNavWrapperStyles}`}>
        <Row className={styles.mobileSideNavContentStyles}>
          {navMobileLinks.map((link, index) => (
            <Col
              key={index}
              xs={12}
              className={`p-2 ${styles['mobileSideNavItem']}`}
            >
              <a href={link.path} target="_blank" className={styles.mobileSideNavLink}>
                <div className={`mobileIconWrapper ${styles['mobileIconWrapperStyles']}`}>
                  <Image src={link.icon} style={{ width: "1.5rem" }} />
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
