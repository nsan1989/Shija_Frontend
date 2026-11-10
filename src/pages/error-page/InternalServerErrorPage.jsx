import { Container } from "react-bootstrap";
import styles from "./error.module.css";

export default function InternalServerErrorPage() {
  return (
    <Container>
      <div className={styles.pageWrapperStyle}>
        <h1>500</h1>
        <p>Server Error</p>
      </div>
    </Container>
  );
}
