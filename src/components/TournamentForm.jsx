import React, { useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { multiStepContext } from "../StateContext";

const TournamentForm = () => {
  const { setCurrentState, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={userData["startTime"]}
              onChange={(e) => setUserData({ ...userData, startTime: e })}
            />

            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={userData["endTime"]}
              onChange={(e) => setUserData({ ...userData, endTime: e })}
            />
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
                value={userData["tournamentName"]}
                onChange={(e) =>
                  setUserData({ ...userData, tournamentName: e.target.value })
                }
                label="Tournament Name"
                id="outlined-size-small"
                placeholder="Enter the name of the tournament"
                size="small"
              />
            </div>

            <div>
              <TextField
                value={userData["matchLocation"]}
                onChange={(e) =>
                  setUserData({ ...userData, matchLocation: e.target.value })
                }
                label="Match Location"
                id="outlined-size-small"
                placeholder="Enter the match location"
                size="small"
              />
            </div>
          </div>

          <div>
            <TextField
              value={userData["comments"]}
              onChange={(e) =>
                setUserData({ ...userData, comments: e.target.value })
              }
              id="standard-multiline-static"
              label="Comments"
              multiline
              rows={6}
              defaultValue="Default Value"
              variant="filled"
            />
          </div>
        </Box>

        <Button
          style={{ marginTop: "50px", marginRight: "10px" }}
          variant="contained"
          color="error"
          onClick={() => setCurrentState(1)}
        >
          Back
        </Button>
        <Button
          style={{ marginTop: "50px" }}
          variant="contained"
          color="success"
          onClick={() => setCurrentState(3)}
        >
          Next
        </Button>
      </div>
    </LocalizationProvider>
  );
};

export default TournamentForm;
