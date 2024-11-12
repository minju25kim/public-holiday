import React from "react";
import { Chip, Box } from "@mui/material";
import countryCodes from "../data/countryCodes.json";

interface CountryToggleProps {
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
}

function ChipMaker({ countryCode, setCountryCode }: CountryToggleProps) {
  const countryName = countryCodes[countryCode as keyof typeof countryCodes]
  return (
    <Chip label={countryName} variant="outlined" onClick={() => setCountryCode(countryCode)} clickable />
  );
}

function CountryToggle({ countryCode, setCountryCode }: CountryToggleProps) {
  const countryCodes = ["KR", "GB","HK","JP","US","VN","SG","AU","NZ","CA"]
  return (
    <Box display="flex" flexWrap="wrap" gap={1}>
      {countryCodes.map((name) => {
        return <ChipMaker countryCode={name} setCountryCode={setCountryCode} />
      })}
    </Box>
  );
}

export default CountryToggle;
