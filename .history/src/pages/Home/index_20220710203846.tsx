import { Play } from "phosphor-react";
import {
  ButtonContainer,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <ButtonContainer type="submit">
          <Play size={30} /> Começar
        </ButtonContainer>
      </form>
    </HomeContainer>
  );
}
