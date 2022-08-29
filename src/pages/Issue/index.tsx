import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { CardInfo } from "./components/CardInfo";
import { IssueContainer, MarkdownContent } from "./styles";

interface IIssue {
  url: string;
  title: string;
  user: {
    login: string;
  };
  body: string;
  created_at: string;
  comments: string;
}

export function Issue() {
  const [issue, setIssue] = useState({} as IIssue);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`repos/wendeljuliao/GitHub-Blog/issues/${id}`)
      .then((response) => response.data)
      .then((data) =>
        setIssue({
          url: data.html_url,
          title: data.title,
          user: {
            login: data.user.login,
          },
          body: data.body,
          created_at: data["created_at"],
          comments: data.comments,
        })
      );
  }, []);

  const markdown = issue.body ? issue.body : "";

  return (
    <IssueContainer>
      <CardInfo
        url={issue.url}
        title={issue.title}
        username={issue.user?.login}
        createdAt={issue["created_at"]}
        comments={issue.comments}
      />
      <MarkdownContent
        children={markdown}
        components={{
          code: "section",
          a: ({ ...props }) => <a href={props.href}>{props.children}</a>,
        }}
      />
    </IssueContainer>
  );
}
