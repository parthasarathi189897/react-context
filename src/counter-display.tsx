import { useCount } from "./counter-context";

export default function CounterDisplay() {
  const { state } = useCount();
  return (
    <>
      <h2>Counter Display</h2>
      <p>{state.count}</p>
    </>
  );
}
