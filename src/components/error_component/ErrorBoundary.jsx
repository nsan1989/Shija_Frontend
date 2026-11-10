import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import InternalServerErrorPage from "../../pages/error-page/InternalServerErrorPage";
import styles from "./error-boundary.module.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="error-page-layout">
      <div className={styles["error-container"]}>
        <InternalServerErrorPage />
        <button onClick={resetErrorBoundary}>Try Again</button>
        {import.meta.env.DEV && <pre>{error.message}</pre>}
      </div>
    </main>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error("Application Error:", error);
        console.error("Error Info:", errorInfo);
      }}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}