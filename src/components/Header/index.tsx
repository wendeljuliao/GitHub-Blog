import { HeaderContainer } from "./styles";
import imageBackground from "../../assets/Cover.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={imageBackground} alt="" />
    </HeaderContainer>
  );
}
