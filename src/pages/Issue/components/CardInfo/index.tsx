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
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
interface ICardInfoProps {
  url: string;
  title: string;
  username: string;
  createdAt: string;
  comments: string;
}

export function CardInfo({
  url,
  title,
  username,
  createdAt,
  comments,
}: ICardInfoProps) {
  const dateFormatted = createdAt
    ? formatDistanceToNow(new Date(createdAt), {
        addSuffix: true,
        locale: ptBR,
      })
    : "Desatualizado";

  return (
    <CardInfoContainer>
      <section>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <a href={url} target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </section>
      <h1>{title}</h1>
      <InfosSection>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{username}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{dateFormatted}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} comentários</span>
        </div>
      </InfosSection>
    </CardInfoContainer>
  );
}
