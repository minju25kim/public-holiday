import "./App.css";
import { useState, useEffect } from "react";
import ViewToggle from "./components/toggle/ViewToggle";
import GlobalFixedChip from "./components/chip/GlobalFixedChip";
import ComingOverChip from "./components/chip/ComingOverChip";
import ResetChip from "./components/chip/ResetChip";
import CountyToggle from "./components/toggle/CountyToggle";
import FilteredData from "./components/FilteredData";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState("stack");
  const [global, setGlobal] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [county, setCounty] = useState("all");
  const [coming, setComing] = useState(false);
  const [over, setOver] = useState(false);
  const [reset, setReset] = useState(false);

  const URL = "https://date.nager.at/api/v2/publicholidays/2022/Gb";

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((json) => setData(json));
  }, []);

  if (data) {
    return (
      <>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
            rowGap: 1,
            p: 2,
            mb: 5,
          }}
        >
          <h1>2022 GB Public holidays</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CountyToggle county={county} setCounty={setCounty} />
            <ViewToggle view={view} setView={setView} />
          </Box>
          <Stack direction="row" spacing={1}>
            <ComingOverChip
              coming={coming}
              setComing={setComing}
              over={over}
              setOver={setOver}
            />
            <GlobalFixedChip
              global={global}
              setGlobal={setGlobal}
              fixed={fixed}
              setFixed={setFixed}
            />
            <ResetChip
              global={global}
              fixed={fixed}
              coming={coming}
              over={over}
              setComing={setComing}
              setOver={setOver}
              setGlobal={setGlobal}
              setFixed={setFixed}
              reset={reset}
              setReset={setReset}
            />
          </Stack>
          <FilteredData
            data={data}
            global={global}
            fixed={fixed}
            county={county}
            coming={coming}
            over={over}
            view={view}
          />
        </Container>
        <Box
          component="footer"
          sx={{
            textAlign: "center",
            p: 2,
          }}
        >
          This page is using {"  "}
          <span>
            <a href="https://date.nager.at/api/v2/publicholidays/2022/GB">
              API
            </a>
          </span>
          ,{"  "}
          <span>
            <a href="https://mui.com/material-ui/getting-started/overview/">
              Materia UI
            </a>
          </span>{" "}
          and
          <span>
            {" "}
            <a href="https://reactjs.org/docs/getting-started.html">ReactJS</a>
          </span>
        </Box>
      </>
    );
  }

  return <h1>No data...</h1>;
}

export default App;
