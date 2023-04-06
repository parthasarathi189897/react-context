import "./App.css";
import Counter from "./counter";
import { CounterProvider } from "./counter-context";
import FootNote from "./foot-note";

function App() {
  return (
    <div className="app">
      <header className="app-header">React Context test</header>
      <h1>Counter</h1>
      <CounterProvider>
        <Counter />
        <FootNote/>
      </CounterProvider>
    </div>
  );
}

export default App;
