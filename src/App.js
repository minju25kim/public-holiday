import "./App.css";
import { useState, useEffect } from "react";
import CountryToggle from "./components/toggle/CountryToggle";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import StackLayout from "./components/layout/StackLayout";
import CalculateDays from "./components/CalculateDays";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("kr");

  const year = new Date().getFullYear();
  const URL = `https://date.nager.at/api/v3/publicholidays/${year}/${country}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((json) => setData(json));
  }, [country,URL]);

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
          <h1>{year} Public holidays</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CountryToggle country={country} setCountry={setCountry} />
          </Box>
          <CalculateDays data={data} />
          <StackLayout data={data} country={country} />
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
