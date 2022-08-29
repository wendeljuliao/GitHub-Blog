import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { Description, PostContainer } from "./styles";

interface IPost {
  number: number;
  url: string;
  title: string;
  description: string;
  createdAt: string;
}

export function Post({ number, title, description, createdAt }: IPost) {
  const navigate = useNavigate();

  const dateFormatted = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  });

  function handleNavigationIssue() {
    navigate(`/issue/${number}`);
  }

  return (
    <PostContainer onClick={handleNavigationIssue}>
      <header>
        <h1>{title}</h1>
        <span>{dateFormatted}</span>
      </header>
      <Description
        components={{
          strong: ({ ...props }) => {
            return <>{props.children}</>;
          },
        }}
      >
        {description}
      </Description>
    </PostContainer>
  );
}
