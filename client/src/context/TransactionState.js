import React, { useReducer } from 'react';
import TransactionContext from './transactionContext';
import transactionReducer from './transactionReducer';
// import axios from 'axios';

const TransactionState = (props) => {
  const initialState = JSON.parse(localStorage.getItem('transactions')) || [
    {
      amount: 500,
      category: 'Salary',
      type: 'Income',
      date: '2020-11-16',
      id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a',
    },
    {
      amount: 225,
      category: 'Investments',
      type: 'Income',
      date: '2020-11-16',
      id: '33b295b8-a8cb-49f0-8f0d-bb268686de1a',
    },
    {
      amount: 123,
      category: 'Car',
      type: 'Expense',
      date: '2020-11-16',
      id: '0f72e66e-e144-4a72-bbc1-c3c92018635e',
    },
    {
      amount: 50,
      category: 'Pets',
      type: 'Expense',
      date: '2020-11-13',
      id: 'c5647dde-d857-463d-8b4e-1c866cc5f83e',
    },
  ];

  const [transactions, dispatch] = useReducer(transactionReducer, initialState);

  // actions creators
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce((acc, curr) => {
    return curr.type === 'Expense' ? acc - curr.amount : acc + curr.amount;
  }, 0);

  return (
    <TransactionContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
