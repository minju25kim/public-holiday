import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { blueGrey } from "@mui/material/colors";

function DaysFilter({ over, setOver, coming, setComing }) {
  const overBackground = blueGrey.A400;
  const comingBackground = blueGrey[50];

  function handleOver() {
    return over ? setOver(false) : setOver(true);
  }
  function handleComing() {
    return coming ? setComing(false) : setComing(true);
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="coming"
        key="coming"
        variant={coming ? "filled" : "outlined"}
        onClick={handleComing}
        sx={coming ? { background: comingBackground, color: "#000" } : null}
      />
      <Chip
        label="over"
        key="over"
        variant={over ? "filled" : "outlined"}
        onClick={handleOver}
        sx={over ? { background: overBackground, color: "#fff" } : null}
      />
    </Stack>
  );
}
export default DaysFilter;
