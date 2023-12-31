import { Transaction } from "../types";

export type TestData = {
  input: string;
  expectedOutput: Transaction[];
};

export const discoverTestData: TestData = {
  input:
    "Trans. Date,Post Date,Description,Amount,Category\r\n" +
    "11/17/23,11/17/23,Name 1,4,Restaurants\r\n" +
    "11/17/23,11/17/23,Name 2,47.65,Restaurants\r\n" +
    "11/16/23,11/16/23,Name 3,410,Government Services\r\n" +
    "11/14/23,11/14/23,Name 4,-1305.84,Payments and Credits\r\n" +
    "11/12/23,11/17/23,Name 5,64.65,Restaurants\r\n",
  expectedOutput: [
    {
      date: "11/17/23",
      description: "Name 1",
      amount: 4,
      category: "Restaurants",
    },
    {
      date: "11/17/23",
      description: "Name 2",
      amount: 47.65,
      category: "Restaurants",
    },
    {
      date: "11/16/23",
      description: "Name 3",
      amount: 410,
      category: "Government Services",
    },
    {
      date: "11/12/23",
      description: "Name 5",
      amount: 64.65,
      category: "Restaurants",
    },
  ],
};

export const chaseTestData: TestData = {
  input:
    "Transaction Date,Post Date,Description,Category,Type,Amount,Memo\n" +
    "12/8/23,12/8/23,AUTOMATIC PAYMENT - THANK,,Payment,114.72,\n" +
    "11/30/23,11/30/23,Transaction 346,Fees & Adjustments,Fee,-0.04,\n" +
    "11/29/23,11/30/23,Transaction 347,Shopping,Sale,-1.56,\n" +
    "11/22/23,11/23/23,Transaction 348,Travel,Sale,-26.94,\n" +
    "11/20/23,11/21/23,Transaction 349,Groceries,Sale,-25.62,\n",
  expectedOutput: [
    {
      date: "11/30/23",
      description: "Transaction 346",
      amount: 0.04,
      category: "Fees & Adjustments",
    },
    {
      date: "11/29/23",
      description: "Transaction 347",
      amount: 1.56,
      category: "Shopping",
    },
    {
      date: "11/22/23",
      description: "Transaction 348",
      amount: 26.94,
      category: "Travel",
    },
    {
      date: "11/20/23",
      description: "Transaction 349",
      amount: 25.62,
      category: "Groceries",
    },
  ],
};

export const appleTestingData: TestData = {
  input:
    "Transaction Date,Clearing Date,Description,Merchant,Category,Type,Amount (USD),Purchased By\n" +
    "11/30/23,11/30/23,ACH DEPOSIT ,Ach Deposit Internet Transfer From Account Ending In 3189,Payment,Payment,-348.65,User\n" +
    "11/24/23,11/25/23,Purchase 1,Metropolitan Transportation Authority (MTA),Transportation,Purchase,2.9,User\n" +
    "11/25/23,11/25/23,Purchase 2,Metropolitan Transportation Authority (MTA),Transportation,Purchase,67,User\n" +
    "11/24/23,11/24/23,Purchase 3,Metropolitan Transportation Authority (MTA),Transportation,Purchase,12.45,User\n" +
    "11/24/23,11/24/23,Purchase 4,Metropolitan Transportation Authority (MTA),Transportation,Purchase,2.9,User\n" +
    "11/22/23,11/22/23,Purchase 5,Metropolitan Transportation Authority (MTA),Transportation,Purchase,45,User\n",
  expectedOutput: [
    {
      date: "11/24/23",
      description: "Purchase 1",
      amount: 2.9,
      category: "Transportation",
    },
    {
      date: "11/25/23",
      description: "Purchase 2",
      amount: 67,
      category: "Transportation",
    },
    {
      date: "11/24/23",
      description: "Purchase 3",
      amount: 12.45,
      category: "Transportation",
    },
    {
      date: "11/24/23",
      description: "Purchase 4",
      amount: 2.9,
      category: "Transportation",
    },
    {
      date: "11/22/23",
      description: "Purchase 5",
      amount: 45,
      category: "Transportation",
    },
  ],
};

export const apiUploadTestingData: Transaction[] = [
  {
    date: '11/12/23',
    description: 'Name 5',
    amount: 64.65,
    category: 'Restaurants'
  },
  {
    date: '11/16/23',
    description: 'Name 3',
    amount: 410,
    category: 'Government Services'
  },
  {
    date: '11/17/23',
    description: 'Name 1',
    amount: 4,
    category: 'Restaurants'
  },
  {
    date: '11/17/23',
    description: 'Name 2',
    amount: 47.65,
    category: 'Restaurants'
  },
  {
    date: '11/20/23',
    description: 'Transaction 349',
    amount: 25.62,
    category: 'Groceries'
  },
  {
    date: '11/22/23',
    description: 'Transaction 348',
    amount: 26.94,
    category: 'Travel'
  },
  {
    date: '11/22/23',
    description: 'Purchase 5',
    amount: 45,
    category: 'Transportation'
  },
  {
    date: '11/24/23',
    description: 'Purchase 1',
    amount: 2.9,
    category: 'Transportation'
  },
  {
    date: '11/24/23',
    description: 'Purchase 3',
    amount: 12.45,
    category: 'Transportation'
  },
  {
    date: '11/24/23',
    description: 'Purchase 4',
    amount: 2.9,
    category: 'Transportation'
  },
  {
    date: '11/25/23',
    description: 'Purchase 2',
    amount: 67,
    category: 'Transportation'
  },
  {
    date: '11/29/23',
    description: 'Transaction 347',
    amount: 1.56,
    category: 'Shopping'
  },
  {
    date: '11/30/23',
    description: 'Transaction 346',
    amount: 0.04,
    category: 'Fees & Adjustments'
  }
]
