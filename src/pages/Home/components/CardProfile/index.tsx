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

export function CardProfile() {
  return (
    <ProfileContainer>
      <img src={avatar} alt="" />
      <ProfileContent>
        <TitleSection>
          <h1>Cameron Williamson</h1>
          <a href="#">
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
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </InfosSection>
      </ProfileContent>
    </ProfileContainer>
  );
}
