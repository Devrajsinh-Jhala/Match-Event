import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";

import { multiStepContext } from "../StateContext";

const DisplayData = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer
        style={{ marginTop: "50px", border: "1px solid black" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Team 1</TableCell>
              <TableCell>Team 2</TableCell>
              <TableCell>Match Type</TableCell>
              <TableCell>Tournamnet Name</TableCell>
              <TableCell>Start Date and Time</TableCell>
              <TableCell>End Date and Time</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow key={data.location}>
                <TableCell>
                  {data.team1Name ? data.team1Name : "-"} (
                  {data.matchLocationTeam1 ? data.matchLocationTeam1 : ""})
                </TableCell>
                <TableCell>
                  {data.team2Name ? data.team2Name : "-"} (
                  {data.matchLocationTeam2 ? data.matchLocationTeam2 : ""})
                </TableCell>
                <TableCell>{data.matchType ? data.matchType : "-"}</TableCell>
                <TableCell>
                  {data.tournamentName ? data.tournamentName : "-"}
                </TableCell>
                <TableCell>
                  {data.startTime
                    ? moment(data.startTime).format("MMMM Do YYYY, h:mm:ss a")
                    : "-"}
                </TableCell>
                <TableCell>
                  {data.endTime
                    ? moment(data.endTime).format("MMMM Do YYYY, h:mm:ss a")
                    : "-"}
                </TableCell>
                <TableCell>
                  {data.matchLocation ? data.matchLocation : "-"}
                </TableCell>
                <TableCell>
                  <textarea
                    style={{ width: "150px", height: "150px", border: "none" }}
                  >
                    {data.comments ? data.comments : ""}
                  </textarea>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayData;
