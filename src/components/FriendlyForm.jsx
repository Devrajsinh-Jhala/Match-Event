import { Box, Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../StateContext";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const FriendlyForm = () => {
  const { setCurrentState, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
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
              label="Start Date and Time"
              value={userData["startTime"]}
              onChange={(e) => setUserData({ ...userData, startTime: e })}
            />

            <div>
              <TextField
                value={userData["matchLocation"]}
                onChange={(e) =>
                  setUserData({ ...userData, matchLocation: e.target.value })
                }
                label="Match Location"
                id="outlined-size-small"
                placeholder="Enter your match location"
                size="small"
              />
            </div>
          </div>

          <div>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="End Date and Time"
              value={userData["endTime"]}
              onChange={(e) => setUserData({ ...userData, endTime: e })}
            />
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
                placeholder="Share your Comments here..."
                variant="filled"
              />
            </div>
          </div>
        </Box>

        <Button
          onClick={() => setCurrentState(1)}
          style={{ marginTop: "50px", marginRight: "10px" }}
          variant="contained"
          color="error"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentState(3)}
          style={{ marginTop: "50px" }}
          variant="contained"
          color="success"
        >
          Next
        </Button>
      </div>
    </LocalizationProvider>
  );
};

export default FriendlyForm;
