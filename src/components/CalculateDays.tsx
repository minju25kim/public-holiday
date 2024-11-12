import React from "react";

interface Holiday {
  date: string;
}

function calculateNumber(data: Holiday[]): number[] {
  const now = Date.now();
  const left = data
    .map((day) => now - Date.parse(day.date))
    .filter((el) => el < 0);
  return left;
}

function CalculateDays({ data }: { data: Holiday[],}) {
  const left = calculateNumber(data);
  return <h2>{left.length} holiday{left.length > 1 ? "s" : ""} left</h2>;
}

export default CalculateDays;
