import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [currentNum, setCurrentNum] = useState(5);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (currentNum === 0) {
      setShowFinal(true);
      return;
    }
    const intervalId = setInterval(() => {
      setCurrentNum(currentNum - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentNum]);

  function resetCounter() {
    setCurrentNum(5);
    setShowFinal(false);
  }

  return (
    <div>
      {!showFinal && (
        <div className="counter">
          <div className="nums">{currentNum}</div>
          <h4>Get Ready</h4>
        </div>
      )}
      {showFinal && (
        <div className="final">
          <h1>GO</h1>
          <button id="replay" onClick={resetCounter}>
            Replay
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
