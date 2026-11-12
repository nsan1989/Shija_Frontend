import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeaderComponent from "../page-header-component/PageHeaderComponent";
import styles from "./privacy.module.css";

export default function PrivacyComponent({ onDismiss }) {
    const [consentGiven, setConsentGiven] = useState(false);

    const handleAccept = (event) => {
        event.preventDefault();
        onDismiss();
    };

    return (
        <div className={styles.backdrop}>
            <section
                className={styles.popup}
                role="dialog"
                aria-modal="true"
                aria-label="Privacy consent"
            >
                <PageHeaderComponent title="privacy consent" />
                <form onSubmit={handleAccept}>
                    <label className={styles.consent}>
                        <input
                            type="checkbox"
                            checked={consentGiven}
                            onChange={(event) => setConsentGiven(event.target.checked)}
                        />
                        <span>
                            By clicking OK you give consent to process your personal
                            information and agree to the terms of Shija Hospitals and
                            Research Institute&apos;s{" "}
                            <Link to="/privacy&policy">Privacy Policy</Link>.
                        </span>
                    </label>
                    <div className={styles.actions}>
                        <button type="button" className={styles.dismiss} onClick={onDismiss}>
                            Not now
                        </button>
                        <button type="submit" className={styles.accept} disabled={!consentGiven}>
                            OK
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}