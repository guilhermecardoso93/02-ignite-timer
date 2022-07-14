import { useContext } from "react";
import { CyclesContext } from "../../context/CycleContext";
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => {
              return (<tr key={cycle.id}>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>5 dias </td>
                <td>
                  <Status statusColor="green">Concluido</Status>
                </td>
              </tr>;)
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
