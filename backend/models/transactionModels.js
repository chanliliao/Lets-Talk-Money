// import for model
import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
