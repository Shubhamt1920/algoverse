import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <Navbar />
      <div className="h-[40vh] w-[80vw] m-auto flex justify-center items-center mt-4 pt-28">
      <Card/>
      </div>
    </>
  );
}

export default App;
