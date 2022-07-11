import { Play } from "phosphor-react";
import {
  ButtonContainer,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  TaskInput,
  MinutesInput
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label>durante</label>
          <MinutesInput type="number" id="minutesAmount" placeholder="00" />

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
