import "./App.css";
import FirstForm from "./components/FirstForm";
import FriendlyForm from "./components/FriendlyForm";
import TeamForm from "./components/TeamForm";
import TournamentForm from "./components/TournamentForm";
import { multiStepContext } from "./StateContext";
import { useContext } from "react";
import DisplayData from "./components/DisplayData";

function App() {
  const { currentState, finalData } = useContext(multiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstForm />;
      case 2:
        return <FriendlyForm />;
      case 3:
        return <TeamForm />;
      case 4:
        return <TournamentForm />;

      default:
        return <FirstForm />;
    }
  };

  return (
    <div className="App">
      <h1
        style={{
          color: "red",
          fontWeight: "bolder",
        }}
      >
        Match Form
      </h1>
      <div>{showStep(currentState)}</div>
      <div>{finalData.length > 0 && <DisplayData />}</div>
    </div>
  );
}

export default App;
