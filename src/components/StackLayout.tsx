import * as React from "react";
import { Paper, Stack, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

interface Holiday {
  date: string;
  localName: string;
}

interface StackLayoutProps {
  data: Holiday[];
}

function StackLayout({ data }: StackLayoutProps) {
  const pastBackground = blueGrey[500];
  const comingBackground = blueGrey[100];

  return (
    <Stack spacing={1}>
      {data.map((day, index) => {
        return (
          <Box key={index}>
            <span>{new Date(data[index].date).toDateString().slice(3, 7)}</span>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: Date.now() - Date.parse(day.date) > 0 ? pastBackground : comingBackground,
                color: Date.now() - Date.parse(day.date) > 0 ? "#fff" : "#000",
              }}
            >
              <b>{day.date}</b>
              {day.localName}
            </Paper>
          </Box>
        );
      })}
    </Stack>
  );
}

export default StackLayout;
