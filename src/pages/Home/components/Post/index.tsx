import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostContainer } from "./styles";

interface IPost {
  url: string;
  title: string;
  description: string;
  createdAt: string;
}

export function Post({ title, description, createdAt }: IPost) {
  const dateFormatted = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  });
  return (
    <PostContainer>
      <header>
        <h1>{title}</h1>
        <span>{dateFormatted}</span>
      </header>
      <p>{description}</p>
    </PostContainer>
  );
}
