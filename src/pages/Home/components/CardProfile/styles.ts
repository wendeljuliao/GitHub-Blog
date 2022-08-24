import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  
  padding: 2rem 2rem 2rem 2.5rem;
  
  background-color: ${props => props.theme['base-profile']};
  
  gap: 2rem;

  border-radius: 10px;

  margin-top: -5.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  p {
    line-height: 1.6;

    margin: 0.5rem 0 1.5rem;
  }
`;

export const ProfileContent = styled.div`
  display: flex;

  flex-direction: column;
`;

export const TitleSection = styled.section`
  display: flex;

  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme['base-title']};

    line-height: 1.3;
  }

  a {
    text-decoration: none;

    font-size: 0.75rem;
    font-weight: bold;
    color: ${props => props.theme['blue']};
    
    line-height: 1.6;
    border-bottom: 1px solid transparent;

    cursor: pointer;
    
    &:hover {
      transition: border-color 0.3s;
      border-bottom-color: ${props => props.theme['blue']};
    }
  }

  svg {
    margin-left: 0.5rem;
  }
`;

export const InfosSection = styled.section`
  display: flex;

  gap: 1.5rem;

  div {
    display: flex;

    align-items: center;

    gap: 0.5rem;

    span {
      color: ${props => props.theme['base-subtitle']};
      line-height: 1.6;
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
      
      color: ${props => props.theme['base-label']};
    }
  }
`;