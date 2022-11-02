import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <h1 className="text-3xl bg-blue-500 text-green-300">Hello world!</h1>;
}

export default App;
