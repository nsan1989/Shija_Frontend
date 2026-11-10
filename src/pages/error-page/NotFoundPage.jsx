import { Container } from "react-bootstrap";
import styles from "./error.module.css";

export default function NotFoundPage() {
  return (
    <Container>
      <div className={styles.pageWrapperStyle}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </Container>
  );
}
