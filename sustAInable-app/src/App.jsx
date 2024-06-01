import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import earthLogo from "./assets/earth.svg";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  // when WE NEED STATE VARS: const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <a href="https://react.dev" target="_blank">
          <img src={earthLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> [openENV] </h1>
      <div className="card">
        {" "}
        <textarea placeholder="Enter URL..." onChange={transformData()} />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Compile SCC report{" "}
        </button>
      </div>
      <div className="card">
        <p>Created By: Saskia Gilmer and Gabriela Hernandez</p>
      </div>
    </>
  );
}

function transformData() {
  console.log("Hello");
}
export default App;
