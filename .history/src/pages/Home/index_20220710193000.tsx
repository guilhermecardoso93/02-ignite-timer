export function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />

        <label htmlFor="">durante</label>
        <input type="number" id="minutesAmount" />
      </form>
    </div>
  );
}
