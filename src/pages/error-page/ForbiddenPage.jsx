import { Container } from "react-bootstrap";
import styles from "./error.module.css";

export default function ForbiddenPage() {
  return (
    <Container>
      <div className={styles.pageWrapperStyle}>
        <h1>403</h1>
        <p>FORBIDDEN</p>
      </div>
    </Container>
  );
}
