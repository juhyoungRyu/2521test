import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Test from "./components/Test";

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {start ? <Test /> : <Start func={() => setStart(true)} />}
    </div>
  );
};

export default App;
