import { Container } from "react-bootstrap";
import styles from "./error.module.css";

export default function UnauthorizedPage() {
  return (
    <Container>
      <div className={styles.pageWrapperStyle}>
        <h1>401</h1>
        <p>Unauthorized access</p>
      </div>
    </Container>
  );
}
