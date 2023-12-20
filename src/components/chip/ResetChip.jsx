import Chip from "@mui/material/Chip";
function ResetChip({
  reset,
  setReset,
}) {
  function handleReset() {
    function setFalse() {
      setReset(false);
    }
    function setTrue() {
      setReset(true);
    }

    return reset ? setTrue() : setFalse();
  }
  return (
    <Chip label="reset" color="warning" key="reset" onClick={handleReset} />
  );
}

export default ResetChip;
