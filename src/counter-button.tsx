import { useCount } from "./counter-context";

export default function CounterButton() {
  const { dispatch } = useCount();
  return (
    <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
  );
}
