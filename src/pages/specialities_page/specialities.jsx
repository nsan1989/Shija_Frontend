import { Container } from 'react-bootstrap';
import styles from './specialities.module.css';
import { FaCircle } from "react-icons/fa";

export default function SpecialitiesPage() {
    return (
        <div className={`specialities-wrapper ${styles[`specialitiesWrapperStyles`]}`}>
            <Container>
                <div className="specialities-navigation mt-4">
                    <nav id="specialities-navbar py-3">
                        <ul class="nav d-flex justify-content-evenly align-items-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#overview">Overview</a>
                            </li>
                            <FaCircle size={'8px'} />
                            <li class="nav-item">
                                <a class="nav-link" href="#message">Message</a>
                            </li>
                            <FaCircle size={'8px'} />
                            <li class="nav-item">
                                <a class="nav-link" href="#team">Team</a>
                            </li>
                            <FaCircle size={'8px'} />
                            <li class="nav-item">
                                <a class="nav-link" href="#treatment">Treatment</a>
                            </li>
                            <FaCircle size={'8px'} />
                            <li class="nav-item">
                                <a class="nav-link" href="#ailment">Ailment</a>
                            </li>
                            <FaCircle size={'8px'} />
                            <li class="nav-item">
                                <a class="nav-link" href="#technology">Technology</a>
                            </li>
                            <FaCircle size={'8px'} />
                            <li class="nav-item">
                                <a class="nav-link" href="#stories">Stories</a>
                            </li>
                        </ul>
                    </nav>
                    <div data-bs-spy="scroll" data-bs-target="#specialities-navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="specialities-scrollspy p-3 rounded-2" tabindex="0">
                        <h4 id="overview">First heading</h4>
                        <p>...</p>
                        <h4 id="message">Second heading</h4>
                        <p>...</p>
                        <h4 id="team">Third heading</h4>
                        <p>...</p>
                        <h4 id="treatment">Fourth heading</h4>
                        <p>...</p>
                        <h4 id="ailment">Fifth heading</h4>
                        <p>...</p>
                        <h4 id="technology">Fifth heading</h4>
                        <p>...</p>
                        <h4 id="stories">Fifth heading</h4>
                        <p>...</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}