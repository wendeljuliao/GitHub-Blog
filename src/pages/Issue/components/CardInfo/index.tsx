import { CardInfoContainer, InfosSection } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function CardInfo() {
  return (
    <CardInfoContainer>
      <section>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <a href="#">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </section>
      <h1>JavaScript data types and data structures</h1>
      <InfosSection>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </InfosSection>
    </CardInfoContainer>
  );
}
