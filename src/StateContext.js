import React, { createContext, useState } from "react";
import App from "./App";

export const multiStepContext = createContext();

const StateContext = () => {
  const [currentState, setCurrentState] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setCurrentState(1);
  };
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentState,
          setCurrentState,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};

export default StateContext;
