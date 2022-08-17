import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function GlobalFixedFilter({ global, setGlobal, fixed, setFixed }) {
  function handleGlobal() {
    return global ? setGlobal(false) : setGlobal(true);
  }
  function handleFixed() {
    return fixed ? setFixed(false) : setFixed(true);
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        key="global"
        variant={global ? "filled" : "outlined"}
        label="Global"
        onClick={handleGlobal}
      />
      <Chip
        key="fixed"
        variant={fixed ? "filled" : "outlined"}
        label="Fixed"
        onClick={handleFixed}
      />
    </Stack>
  );
}

export default GlobalFixedFilter;
