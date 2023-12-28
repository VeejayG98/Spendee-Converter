export type Transaction = {
  date: string;
  description: string;
  amount: number;
  category: string;
};

export type CardData = {
  discover: string | null;
  chase: string | null;
  apple: string | null;
}
