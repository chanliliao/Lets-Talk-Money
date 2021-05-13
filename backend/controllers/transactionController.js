import Transaction from '../models/transactionModels.js';
import asyncHandler from 'express-async-handler';

//@desc   Create Transaction
//@route  POST /api/transactions/
//@access Public
const createTransaction = asyncHandler(async (req, res) => {
  // create boiler plate for new transaction
  const transaction = new Transaction({
    amount: 0,
    category: 'Salary',
    type: 'Income',
    date: '2020-11-16',
  });

  // create the transaction and send it
  const createdTransaction = await transaction.save();
  res.status(201).json(createdTransaction);
});

//@desc   delete a transaction
//@route  DELETE /api/transactions/:id
//@access Public
const deleteTransaction = asyncHandler(async (req, res) => {
  // grab the product by id
  const transaction = await Transaction.findById(req.params.id);

  // check transaction and remove it
  if (transaction) {
    await transaction.remove();
    res.json({ message: 'transaction removed' });
  } else {
    res.status(404);
    throw new Error('transaction does not exist');
  }
});

export { deleteTransaction, createTransaction };
