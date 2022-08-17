import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChipLayout from "../chip/CountyChip";

import Grid from "@mui/material/Grid";
import { blueGrey } from "@mui/material/colors";

function CardLayout({ data }) {
  const pastBackground = blueGrey.A400;
  const comingBackground = blueGrey[50];
  function Content({ day }) {
    return (
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 key={day.date}>{day.date}</h1>
        <h2 key={day.localName}>{day.localName}</h2>
        <ChipLayout day={day} />
      </CardContent>
    );
  }

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={1}
      justifyContent="space-evenly"
    >
      {data.map((day, index) => {
        return (
          <>
            {index !== 0 ? (
              new Date(data[index].date).getMonth() ===
              new Date(data[index - 1].date).getMonth() ? null : (
                <Grid sx={{ p: 1, width: 350, height: 350 }}>
                  {Date.now() - Date.parse(day.date) > 0 ? (
                    <Card
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 40,
                        fontWeight: 800,
                        backgroundColor: pastBackground,
                        color: "#fff",
                      }}
                    >
                      {new Date(data[index].date).toDateString().slice(3, 7)}
                    </Card>
                  ) : (
                    <Card
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 40,
                        fontWeight: 800,
                        backgroundColor: comingBackground,
                      }}
                    >
                      {new Date(data[index].date).toDateString().slice(3, 7)}
                    </Card>
                  )}
                </Grid>
              )
            ) : (
              <Grid sx={{ p: 1, width: 350, height: 350 }}>
                {Date.now() - Date.parse(day.date) > 0 ? (
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 40,
                      fontWeight: 800,
                      backgroundColor: pastBackground,
                      color: "#fff",
                    }}
                  >
                    {new Date(data[0].date).toDateString().slice(3, 7)}
                  </Card>
                ) : (
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 40,
                      fontWeight: 800,
                      backgroundColor: comingBackground,
                    }}
                  >
                    {new Date(data[0].date).toDateString().slice(3, 7)}
                  </Card>
                )}
              </Grid>
            )}
            {Date.now() - Date.parse(day.date) > 0 ? (
              <Grid sx={{ p: 1, width: 350, height: 350 }}>
                <Card
                  component="div"
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: pastBackground,
                    color: "#fff",
                  }}
                >
                  <Content key={index} day={day} />
                </Card>
              </Grid>
            ) : (
              <Grid sx={{ p: 1, width: 350, height: 350 }}>
                <Card
                  component="div"
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: comingBackground,
                  }}
                >
                  <Content key={index} day={day} />
                </Card>
              </Grid>
            )}
          </>
        );
      })}
    </Grid>
  );
}

export default CardLayout;
