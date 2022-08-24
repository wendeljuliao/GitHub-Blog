import styled from "styled-components";


export const CardInfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;

  padding: 2rem;
  
  background-color: ${props => props.theme['base-profile']};

  border-radius: 10px;

  margin-top: -5.5rem;

  h1 {
    color: ${props => props.theme['base-title']};

    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;

    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  section:first-child {
    display: flex;

    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${props => props.theme['blue']};

      font-size: 0.75rem;
      font-weight: bold;
      line-height: 1.6;

      border-bottom: 1px solid transparent;

      cursor: pointer;

      &:hover {
        transition: border-color 0.3s;
        border-bottom-color: ${props => props.theme['blue']};
      }
    }

    a:first-child {
      svg {
        margin-right: 0.5rem;
      }
    }

    a:last-child {
      svg {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const InfosSection = styled.section`
  display: flex;

  gap: 2rem;

  div {
    display: flex;

    align-items: center;

    gap: 0.5rem;

    span {
      color: ${props => props.theme['base-span']};
      line-height: 1.6;
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
      
      color: ${props => props.theme['base-label']};
    }
  }
`;