import { Transaction } from "../types";

export default function processDiscover(data: string | null): Transaction[] {
  const jsonData: Transaction[] = [];

  if (!data) return jsonData;

  const rows = data.split("\r\n");

  const mapping = {
    date: 0,
    description: 2,
    amount: 3,
    category: 4,
  };

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].length === 0) continue;

    const cells = rows[i].split(",");

    const row: Transaction = {
      date: cells[mapping.date],
      description: cells[mapping.description].replace(/"/g, ""),
      amount: parseFloat(cells[mapping.amount]),
      category: cells[mapping.category].replace(/"/g, ""),
    };

    if (row.amount >= 0) jsonData.push(row);
  }
  return jsonData;
}
