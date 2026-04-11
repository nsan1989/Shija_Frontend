import Title from "../../components/title_component/title";
import BreadcrumbComponent from "../../components/breadcrumb_component/breadcrumb";
import { Container } from "react-bootstrap";
import styles from "./specialities.module.css";
import { FaCircle, FaHome, FaArrowRight } from "react-icons/fa";

const breadcrumbItems = [
  { href: "/", icon: <FaHome /> },
  { label: "COE", href: "/centres_of_excellence" },
  { label: "Speciality Details", href: "/Specialities" },
];

export default function SpecialitiesPage() {
  Title("Speciality Details");


  return (
    <div
      className={`specialities-wrapper ${styles[`specialitiesWrapperStyles`]}`}
    >
      <Container>
        <div className="mb-3">
          {/* breadcrumb section */}
          <BreadcrumbComponent items={breadcrumbItems} />
        </div>
        <div className="specialities-navigation">
          <nav id="specialities-navbar" className="py-3">
            <ul className="nav d-flex justify-content-evenly align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#overview">
                  Overview
                </a>
              </li>
              <FaArrowRight size={"16px"} />
              <li className="nav-item">
                <a className="nav-link" href="#message">
                  Message
                </a>
              </li>
              <FaArrowRight size={"16px"} />
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <FaArrowRight size={"16px"} />
              <li className="nav-item">
                <a className="nav-link" href="#treatment">
                  Treatment
                </a>
              </li>
              <FaArrowRight size={"16px"} />
              <li className="nav-item">
                <a className="nav-link" href="#ailment">
                  Ailment
                </a>
              </li>
              <FaArrowRight size={"16px"} />
              <li className="nav-item">
                <a className="nav-link" href="#technology">
                  Technology
                </a>
              </li>
              <FaArrowRight size={"16px"} />
              <li className="nav-item">
                <a className="nav-link" href="#stories">
                  Stories
                </a>
              </li>
            </ul>
          </nav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#specialities-navbar"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            class={`specialities-scrollspy p-3 rounded-2 ${styles['specialityStyle']}`}
            tabindex="0"
          >
            <h4 id="overview">overview</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              ipsam eligendi laboriosam quasi, officia vitae ab? Saepe quae,
              aperiam corrupti natus, minus quisquam facilis sit cumque repellat
              non eaque laborum.
            </p>
            <h4 id="message">message</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              ipsam quis at itaque enim. Obcaecati error aliquid natus eligendi
              voluptate recusandae, reiciendis non sint nulla mollitia aperiam,
              doloremque magni corrupti.
            </p>
            <h4 id="team">team</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              aut ex sunt dolorum tempora dolore non similique vitae aspernatur
              quae odit aperiam temporibus saepe veritatis ea eveniet beatae
              blanditiis vel?
            </p>
            <h4 id="treatment">treatment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              minima culpa sapiente eius quia cum ut pariatur aperiam rem
              expedita. Voluptatibus, nam neque! Alias, cumque aliquam.
              Consequatur laboriosam saepe non.
            </p>
            <h4 id="ailment">ailment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis doloribus minima tempore, voluptates asperiores
              explicabo quidem in neque quam molestias? Numquam obcaecati a
              expedita dolor ducimus! Nemo ipsam culpa ex.
            </p>
            <h4 id="technology">technology</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              praesentium fuga molestias consectetur id expedita quas similique
              molestiae reiciendis obcaecati aliquam voluptates quam sit animi
              nemo, voluptatem illo ipsam beatae?
            </p>
            <h4 id="stories">stories</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              libero adipisci accusamus, molestiae repudiandae reiciendis, enim
              sapiente incidunt nobis deserunt corporis illum debitis, minus
              tempora quasi sunt consectetur iusto ipsum.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
