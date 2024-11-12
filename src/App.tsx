import React from "react";
import { Container, Typography } from "@mui/material";

import codeName from "./utils/codeName";
import CountryToggle from "./components/CountryToggle";
import StackLayout from "./components/StackLayout";
import CalculateDays from "./components/CalculateDays";

interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
  launchYear: number | null;
  types: string[];
}

const App: React.FC = () => {
  const [data, setData] = React.useState<Holiday[]>([]);
  const [countryCode, setcountryCode] = React.useState<string>("KR");

  const year = new Date().getFullYear();

  React.useEffect(() => {
    const URL = `https://date.nager.at/api/v3/publicholidays/${new Date().getFullYear()}/${countryCode}`;
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        setData(await res.json())
      }
      catch (error) {
        console.error("Error fetching data:", error);
        alert(`Error fetching data: ${error}`);
      }
    }
    fetchData()
  }, [countryCode]);

  const countryName = codeName(countryCode);

  return (
    <Container>
      <h1>{year} Public holiday</h1>
      <CountryToggle countryCode={countryCode} setCountryCode={setcountryCode} />
      <Typography variant="h2">{countryName}</Typography>
      <CalculateDays data={data} />
      <StackLayout data={data} />
      <footer>
        <p>© {year} Minju Kim. All rights reserved.</p>
      </footer>
    </Container>
  );
}

export default App;
