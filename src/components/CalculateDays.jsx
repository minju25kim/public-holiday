function CalculateDays({ data }) {
  function calculateNumber(data) {
    const now = Date.now();
    const left = data
      .map((day) => now - Date.parse(day.date))
      .filter((el) => el < 0);
    return left;
  }

  const left = calculateNumber(data);
  return <h2>{left.length} holiday(s) left</h2>;
}

export default CalculateDays;
