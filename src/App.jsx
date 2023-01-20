import { useState } from "react";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
