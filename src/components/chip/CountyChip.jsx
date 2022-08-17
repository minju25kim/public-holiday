import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function ChipLayout({ day }) {
  return (
    <>
      {day.counties ? (
        <Stack direction="row" spacing={0.5}>
          {day.counties.map((county) => (
            <Chip label={county} sx={{ background: "#fff", color: "#000" }} />
          ))}
        </Stack>
      ) : (
        <Chip label="GB" sx={{ background: "#fff", color: "#000" }} />
      )}
    </>
  );
}
export default ChipLayout;
