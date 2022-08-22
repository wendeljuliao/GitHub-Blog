import { CardProfile } from "./components/CardProfile";
import { Post } from "./components/Post";
import { HomeContainer, PostsContent, Publications, Search } from "./styles";

export function Home() {
  const mockPosts = [
    {
      id: 0,
      title: "JavaScript data types and data structures",
      description:
        "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
      createdAt: "2022-08-22T14:23:42.996Z",
    },
    {
      id: 1,
      title: "JavaScript data types and data structures",
      description:
        "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
      createdAt: "2022-08-22T14:23:42.996Z",
    },
    {
      id: 2,
      title: "JavaScript data types and data structures",
      description:
        "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
      createdAt: "2022-08-22T14:23:42.996Z",
    },
    {
      id: 3,
      title: "JavaScript data types and data structures",
      description:
        "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
      createdAt: "2022-08-22T14:23:42.996Z",
    },
    {
      id: 4,
      title: "JavaScript data types and data structures",
      description:
        "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
      createdAt: "2022-08-22T14:23:42.996Z",
    },
  ];

  return (
    <HomeContainer>
      <CardProfile />

      <Publications>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <Search placeholder="Buscar conteúdo" />

        <PostsContent>
          {mockPosts.map((post) => (
            <Post key={post.id} />
          ))}
        </PostsContent>
      </Publications>
    </HomeContainer>
  );
}
