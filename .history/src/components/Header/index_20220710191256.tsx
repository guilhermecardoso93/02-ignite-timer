import { HeaderContainer } from "./styles";
import  logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span> logo </span>
      <nav>
        <a href=""> timer </a>
        <a href=""> history</a>
      </nav>
    </HeaderContainer>
  );
}
