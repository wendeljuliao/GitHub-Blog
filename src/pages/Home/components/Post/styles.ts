import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const PostContainer = styled.div`
  display: flex;

  flex-direction: column;

  height: 16.25rem;
  padding: 2rem;
  background-color: ${props => props.theme['base-post']};

  border-radius: 10px;

  gap: 1.25rem;

  border: 2px solid transparent;

  header {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    h1 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${props => props.theme['base-title']};
      line-height: 1.6;

      width: 283px;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};

      line-height: 1.6;
    }
  }

  cursor: pointer;

  
  &:hover {
    transition: border-color 0.3s;
    border-color: ${props => props.theme['base-label']};
  }
`;

export const Description = styled(ReactMarkdown)`
  line-height: 1.6;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;