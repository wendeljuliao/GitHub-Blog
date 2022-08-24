import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CardProfile } from "./components/CardProfile";
import { Post } from "./components/Post";
import { HomeContainer, PostsContent, Publications, Search } from "./styles";

export function Home() {
  const { issues } = useContext(UserContext);
  console.log(issues);

  return (
    <HomeContainer>
      <CardProfile />

      <Publications>
        <div>
          <h2>Publicações</h2>
          <span>{issues.length} publicações</span>
        </div>
        <Search placeholder="Buscar conteúdo" />

        <PostsContent>
          {issues.map((post) => (
            <Post
              key={post.id}
              url={post.url}
              title={post.title}
              description={post.body}
              createdAt={post["created_at"]}
            />
          ))}
        </PostsContent>
      </Publications>
    </HomeContainer>
  );
}
