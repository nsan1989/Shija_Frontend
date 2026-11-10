import { Container } from "react-bootstrap";
import styles from "./error.module.css";

export default function MaintenancePage() {
  return (
    <Container>
      <div className={styles.pageWrapperStyle}>
        <h1>This site is currently under maintenance.</h1>
      </div>
    </Container>
  );
}
