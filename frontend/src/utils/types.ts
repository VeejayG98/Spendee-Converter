export type Transaction = {
  date: string;
  description: string;
  amount: number;
  category: string;
};

export type BankFiles = {
  discover?: File | null;
  chase?: File | null;
  apple?: File | null;
};

export type CSVData = { [key: string]: string };