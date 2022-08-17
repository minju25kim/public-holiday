import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ChipLayout({ global, setGlobal, fixed, setFixed, county, setCounty }) {
  function handleCounty(event) {
    setCounty(event.target.value);
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0.5 }}>
      <ToggleButtonGroup
        exclusive
        value={county}
        aria-label="county-selection"
        onChange={handleCounty}
      >
        {county.value !== "all" ? (
          <ToggleButton value="all">ALL</ToggleButton>
        ) : (
          <ToggleButton value="all" selected>
            ALL
          </ToggleButton>
        )}
        <ToggleButton value="eng">GB-ENG</ToggleButton>
        <ToggleButton value="wls">GB-WLS</ToggleButton>
        <ToggleButton value="sct">GB-SCT</ToggleButton>
        <ToggleButton value="nir">GB-NIR</ToggleButton>
        <ToggleButton value="gb">GB</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default ChipLayout;
