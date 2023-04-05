import { useCount } from "./counter-context";

export default function CounterDisplay() {
  const { state } = useCount();
  console.log(state);
  return (
    <p>{state.count}</p>
  );
}
