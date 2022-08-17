import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

function ChipLayout({ view, setView }) {
  function handleView(event, nextView) {
    if (nextView === "stack") {
      setView("stack");
    }
    if (nextView === "card") {
      setView("card");
    }
  }

  return (
    <ToggleButtonGroup
      exclusive
      value={view}
      aria-label="view selection"
      onChange={handleView}
    >
      <ToggleButton
        value="stack"
        aria-label="stack view"
        selected={view !== "stack" ? false : true}
      >
        <ViewHeadlineIcon />
      </ToggleButton>

      <ToggleButton
        value="card"
        aria-label="grid view"
        selected={view !== "card" ? false : true}
      >
        <GridViewOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ChipLayout;
