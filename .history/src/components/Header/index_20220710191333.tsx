import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <a href=""> timer </a>
        <a href=""> history</a>
      </nav>
    </HeaderContainer>
  );
}
