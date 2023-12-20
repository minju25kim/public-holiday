import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ChipLayout({ country, setCountry }) {
  function handleCountry(event) {
    setCountry(event.target.value);
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0.5 }}>
      <ToggleButtonGroup
        exclusive
        value={country}
        aria-label="county-selection"
        onChange={handleCountry}
      >
        <ToggleButton value="kr">KR</ToggleButton>
        <ToggleButton value="gb">GB</ToggleButton>
        <ToggleButton value="all">ALL</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default ChipLayout;
