import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHealthAndSafety, MdAddHomeWork } from "react-icons/md";
import { IoIosNavigate } from "react-icons/io";
import styles from "./side_nav.module.css";

const navLinks = [
  {
    name: "Book Appointment",
    icon: <FaUserDoctor />,
    path: "/appointment",
  },
  {
    name: "Book Health Check",
    icon: <MdHealthAndSafety />,
    path: "/health-check",
  },
  {
    name: "Book Home Care",
    icon: <MdAddHomeWork />,
    path: "/home-care",
  },
  {
    name: "Navigate",
    icon: <IoIosNavigate />,
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
    <div className={`sideNav-wrapper border ${styles.sideNavWrapperStyles}`}>
      <Row className={styles.sideNavContentStyles}>
        {navLinks.map((link, index) => (
          <Col
            key={index}
            xs={12}
            className={styles.sideNavItem}
          >
            <div className={styles.sideNavLink}>
              <div className={`iconWrapper ${styles['iconWrapperStyles']}`}>
                <span className={styles.sideNavIcon}>{link.icon}</span>
              </div>
              <span className={styles.sideNavText}>{link.name}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
