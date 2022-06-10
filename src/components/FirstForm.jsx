import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../StateContext";

const FirstForm = () => {
  const handleFormRendering = () => {
    if (userData.matchType === "Tournament") {
      setCurrentState(4);
    } else {
      setCurrentState(2);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, matchType: e.target.value });
  };
  const { setCurrentState, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <Stack
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControl style={{ margin: "20px", width: "70%" }}>
        <InputLabel style={{ align: "center" }}>
          Please Select the Match Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="matchType"
          value={userData["matchType"]}
          onChange={handleChange}
        >
          <MenuItem value={"Friendly"}>Friendly</MenuItem>
          <MenuItem value={"Tournament"}>Tournament</MenuItem>
        </Select>
      </FormControl>

      <Button
        onClick={() => handleFormRendering()}
        style={{ marginTop: "20px", width: "10%", align: "center" }}
        variant="contained"
        color="success"
      >
        Next
      </Button>
    </Stack>
  );
};

export default FirstForm;
