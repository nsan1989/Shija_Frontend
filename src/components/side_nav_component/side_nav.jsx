import { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import styles from "./side_nav.module.css";
import doctor from "../../assets/icons/doctor-icon.png" ;
import lab from "../../assets/icons/lab-icon.png" ;
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

export function useScrollVisibility() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isWideScreen = window.innerWidth > 768;
      const scrolledBeyondViewport = window.scrollY < window.innerHeight;

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
    <div className={`sideNav-wrapper ${styles.sideNavWrapperStyles}`}>
      <Row className={styles.sideNavContentStyles}>
        {navLinks.map((link, index) => (
          <Col
            key={index}
            xs={12}
            className={`p-2 ${styles['sideNavItem']}`}
          >
            <a href={link.path} target="_blank" className={styles.sideNavLink}>
              <div className={`iconWrapper ${styles['iconWrapperStyles']}`}>
                <Image src={link.icon} style={{width:"1.5rem"}} />
              </div>
              <span className={styles.sideNavText}>{link.name}</span>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}
