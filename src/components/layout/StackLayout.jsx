import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ChipLayout from "../chip/CountryChip";
import { blueGrey } from "@mui/material/colors";

function Menu({ data }) {
  const pastBackground = blueGrey.A400;
  const comingBackground = blueGrey[50];

  function Content({ day, index }) {
    return (
      <>
        <span>
          <b>{day.date}</b> {day.localName}
        </span>
        <ChipLayout day={day} />
      </>
    );
  }

  return (
    <Stack spacing={1}>
      {data.map((day, index) => {
        return (
          <>
            {index !== 0 ? (
              new Date(data[index].date).getMonth() ===
              new Date(data[index - 1].date).getMonth() ? null : (
                <span>
                  <b>{new Date(data[index].date).toDateString().slice(3, 7)}</b>
                </span>
              )
            ) : (
              <span>
                <b>{new Date(data[0].date).toDateString().slice(3, 7)}</b>
              </span>
            )}
            {Date.now() - Date.parse(day.date) > 0 ? (
              <Paper
                component="span"
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: pastBackground,
                  color: "#fff",
                }}
              >
                {" "}
                <Content day={day} key={day} index={index} />
              </Paper>
            ) : (
              <Paper
                component="span"
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: comingBackground,
                  color: "#000",
                }}
              >
                {" "}
                <Content day={day} key={day} index={index} />
              </Paper>
            )}
          </>
        );
      })}
    </Stack>
  );
}

export default Menu;
