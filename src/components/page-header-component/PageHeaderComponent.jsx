import styles from "./page-header.module.css";

export default function PageHeaderComponent({ title, subtitle, style }) {
  return (
    <div className={styles.headerWrapperStyle}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
