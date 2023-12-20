import StackLayout from "./layout/StackLayout";
import CalculateDays from "./CalculateDays";

function FilteredData({ data, country }) {
  
  return (
    <>
      <CalculateDays data={data} />
      <StackLayout data={data} />
    </>
  );
}

export default FilteredData;
