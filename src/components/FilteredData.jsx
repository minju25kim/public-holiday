import StackLayout from "./layout/StackLayout";
import CalculateDays from "./CalculateDays";

function FilteredData({ data, country }) {
  const filteredData = data.filter((day) => {
    if (country === "gb") {
      return day.countries === null;
    } else if (country === "kr") {
      return day.countries === null;
    } else {
      return day;
    }
  });

  return (
    <>
      <CalculateDays data={filteredData} />
      <StackLayout data={filteredData} />
    </>
  );
}

export default FilteredData;
