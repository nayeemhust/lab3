import React, { createContext, useState } from 'react';
import { transactions as initialTransactions } from '../data/transactions';

export const TransactionsContext = createContext();
const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
export default TransactionsProvider;
