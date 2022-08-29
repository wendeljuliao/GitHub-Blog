import {
  InfosSection,
  ProfileContainer,
  ProfileContent,
  TitleSection,
} from "./styles";
import avatar from "./../../../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../../../../contexts/UserContext";
import { useContextSelector } from "use-context-selector";

export function CardProfile() {
  const user = useContextSelector(UserContext, (context) => {
    return context.user;
  });

  return (
    <ProfileContainer>
      <img src={avatar} alt="" />
      <ProfileContent>
        <TitleSection>
          <h1>{user.name}</h1>
          <a href={user["html_url"]} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleSection>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <InfosSection>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.username}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company ?? "Nada declarado"}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers} seguidores</span>
          </div>
        </InfosSection>
      </ProfileContent>
    </ProfileContainer>
  );
}
