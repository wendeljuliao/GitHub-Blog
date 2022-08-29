import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const IssueContainer = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;

  flex-direction: column;
`;

export const MarkdownContent = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  
  p:not(:first-child) {
    margin-top: 1rem;
  }
  
  a {
    color: ${props => props.theme['blue']};
    text-decoration: underline;

    cursor: pointer;
  }
  
  section {
    padding: 1rem;
    background-color: ${props => props.theme['base-post']};

    border-radius: 2px;

    margin-top: 1.5rem;
  }

  line-height: 1.6;
`;