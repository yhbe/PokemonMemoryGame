import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Playerboard from "./components/playerBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Playerboard />
    </>
  );
}

export default App;
