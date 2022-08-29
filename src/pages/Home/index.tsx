import { ChangeEvent, useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../contexts/UserContext";
import { CardProfile } from "./components/CardProfile";
import { Post } from "./components/Post";
import { HomeContainer, PostsContent, Publications, Search } from "./styles";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const issues = useContextSelector(UserContext, (context) => {
    return context.issues;
  });

  const fetchIssues = useContextSelector(UserContext, (context) => {
    return context.fetchIssues;
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      await fetchIssues(searchQuery);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <HomeContainer>
      <CardProfile />

      <Publications>
        <div>
          <h2>Publicações</h2>
          <span>{issues.length} publicações</span>
        </div>
        <Search
          placeholder="Buscar conteúdo"
          value={searchQuery}
          onChange={(text) => setSearchQuery(text.target.value)}
        />

        <PostsContent>
          {issues.map((post) => (
            <Post
              key={post.id}
              number={post.number}
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
