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
      <div className="h-auto min-h-[40vh] w-full sm:w-[80vw] m-auto flex justify-center mt-2 sm:mt-4 pt-2 sm:pt-4">
        <Card />
      </div>
    </>
  );
}

export default App;
