import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Button({ color = 'primary'}) {
  return(
    <ButtonContainer>
      Enviar
    </ButtonContainer>
  )
}