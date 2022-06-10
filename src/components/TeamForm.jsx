import React, { useContext } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { multiStepContext } from "../StateContext";

const TeamForm = () => {
  const handleChange = (e) => {
    setUserData({
      ...userData,
      matchLocationTeam1: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setUserData({
      ...userData,
      matchLocationTeam2: e.target.value,
    });
  };

  const { setCurrentState, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div
      style={{
        margin: "10px",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "20px", marginBottom: "10px" }}>
          <TextField
            value={userData["team1Name"]}
            onChange={(e) =>
              setUserData({ ...userData, team1Name: e.target.value })
            }
            label="Team-1 Name"
            id="outlined-size-small"
            placeholder="Enter the name of the team"
            size="small"
          />
        </div>

        <FormControl style={{ margin: "20px", width: "70%" }}>
          <InputLabel style={{ align: "center" }}>
            Please Select the Match Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="matchLocationTeam1"
            value={userData["matchLocationTeam1"]}
            onChange={handleChange}
          >
            <MenuItem value={"Home"}>Home</MenuItem>
            <MenuItem value={"Away"}>Away</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div
        style={{ fontSize: "20px", marginBottom: "50px", marginTop: "50px" }}
      >
        -------------------------- VS ----------------------------
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <TextField
            value={userData["team2Name"]}
            onChange={(e) =>
              setUserData({ ...userData, team2Name: e.target.value })
            }
            style={{ marginBottom: "10px" }}
            label="team2Name"
            id="outlined-size-small"
            placeholder="Enter the name of the team"
            size="small"
          />
        </div>

        <FormControl style={{ margin: "20px", width: "70%" }}>
          <InputLabel id="demo-simple-select-label">
            Please Select the Match Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="matchLocationTeam2"
            value={userData["matchLocationTeam2"]}
            onChange={handleChange2}
          >
            <MenuItem value={"Home"}>Home</MenuItem>
            <MenuItem value={"Away"}>Away</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div
        style={{
          width: "80%",
          display: "flex",
          gap: "20px",
          marginTop: "50px",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => setCurrentState(2)}
          variant="contained"
          color="error"
        >
          Back
        </Button>
        <Button onClick={submitData} variant="contained" color="success">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default TeamForm;
