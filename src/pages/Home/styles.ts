import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;

  flex-direction: column;
`;

export const Publications = styled.main`
  display: flex;

  flex-direction: column;

  padding: 4rem 0;

  > div:first-child {
    display: flex;

    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${props => props.theme['base-subtitle']};

      line-height: 1.6;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};

      line-height: 1.6;
    }

    margin-bottom: 0.75rem;
  }
`;

export const Search = styled.input`
  background-color: ${props => props.theme['base-input']};
  padding: 0.75rem 1rem;
  color: ${props => props.theme['base-text']};

  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;

  &:focus {
    transition: border-color 0.3s;
    border-color: ${props => props.theme['blue']};
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`;

export const PostsContent = styled.div`
  display: grid;
  padding: 3rem 0;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;
