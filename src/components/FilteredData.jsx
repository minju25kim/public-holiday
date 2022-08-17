import StackLayout from "./layout/StackLayout";
import CardLayout from "./layout/CardLayout";
import CalculateDays from "./CalculateDays";

function FilteredData({ view, data, global, fixed, county, over, coming }) {
  const globalFixedData = data.filter((day) => {
    if (global && fixed) {
      return day.global === true && day.fixed === true;
    }
    if (global) {
      return day.global === true;
    }
    if (fixed) {
      return day.fixed === true;
    }
    return day;
  });
  const comingOverData = globalFixedData.filter((day) => {
    if (coming && over) {
      return null;
    }
    if (coming) {
      return Date.now() - Date.parse(day.date) < 0;
    }
    if (over) {
      return Date.now() - Date.parse(day.date) > 0;
    }
    return day;
  });

  const filteredData = comingOverData.filter((day) => {
    if (county === "gb") {
      return day.counties === null;
    } else if (day.counties !== null) {
      switch (county) {
        case "eng":
          return day.counties.includes("GB-ENG");
        case "sct":
          return day.counties.includes("GB-SCT");
        case "wls":
          return day.counties.includes("GB-WLS");
        case "nir":
          return day.counties.includes("GB-NIR");
        default:
          return day;
      }
    } else {
      return day;
    }
  });

  return (
    <>
      <CalculateDays data={filteredData} />
      {view === "stack" ? (
        <StackLayout data={filteredData} />
      ) : (
        <CardLayout data={filteredData} />
      )}
    </>
  );
}

export default FilteredData;
