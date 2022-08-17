import Chip from "@mui/material/Chip";
function ResetChip({
  over,
  coming,
  global,
  fixed,
  setOver,
  setComing,
  setGlobal,
  setFixed,
  reset,
  setReset,
}) {
  function handleReset() {
    function setFalse() {
      setOver(false);
      setComing(false);
      setFixed(false);
      setGlobal(false);
      setReset(false);
    }
    function setTrue() {
      setOver(true);
      setComing(true);
      setFixed(true);
      setGlobal(true);
      setReset(true);
    }

    return reset ? setTrue() : setFalse();
  }
  return (
    <Chip label="reset" color="warning" key="reset" onClick={handleReset} />
  );
}

export default ResetChip;
