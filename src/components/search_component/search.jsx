import { Container } from 'react-bootstrap';
import styles from './search.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({placeholder = "Type to search..."}) {
    return (
        <div className={`${styles.searchWrapper} d-none d-lg-flex`}>
            <Container className={`${styles.containerStyles} d-flex justify-content-center w-100 border rounded-5 py-2`}>
                <input
                    type="text"
                    className={`${styles.searchInput} w-100 border-0 bg-transparent`}
                    placeholder={placeholder}
                />
                <button className={`${styles.searchButton} border-0`}><FaMagnifyingGlass /></button>
            </Container>
        </div>
    );
}
