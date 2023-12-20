import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function CountryToggle({ country, setCountry }) {
  function handleCountry(event) {
    setCountry(event.target.value);
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0.5 }}>
      <ToggleButtonGroup
        exclusive
        value={country}
        aria-label="country-selection"
        onChange={handleCountry}
      >
        <ToggleButton value="kr">KR</ToggleButton>
        <ToggleButton value="gb">GB</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default CountryToggle;
