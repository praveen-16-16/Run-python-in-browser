import { useState } from "react";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");
  const [loding, setloding] = useState(false)

  async function runPython() {
    setloding(true)
    try {
      const response = await fetch("http://localhost:5000/run_python");
      const data = await response.text();
      setOutput(data);
      setloding(false)
    } catch (error) {
      setOutput("Failed to run Python script");
    }
  }

  return (
    <>
      <div className="container">
        <button onClick={runPython}>Run Python</button>
        {loding?"Loding...":""}
        <pre>{output}</pre>
      </div>
    </>
  );
}

export default App;
