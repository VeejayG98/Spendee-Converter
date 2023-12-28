import { Transaction } from "../types";

export default function processChase(data: string | null): Transaction[] {
  const jsonData: Transaction[] = [];

  if (!data) return jsonData;

  const rows = data.split("\n");

  const mapping = {
    date: 0,
    description: 2,
    amount: 5,
    category: 3,
  };

  for (let i = 1; i < rows.length - 1; i++) {
    const cells = rows[i].split(",");

    const row: Transaction = {
      date: cells[mapping.date],
      description: cells[mapping.description],
      amount: -parseFloat(cells[mapping.amount]),
      category: cells[mapping.category],
    };

    if (row.amount >= 0) jsonData.push(row);
  }
  return jsonData;
}
