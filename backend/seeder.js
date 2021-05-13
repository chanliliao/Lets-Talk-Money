// import for model
import mongoose from 'mongoose';
import Transaction from './models/transactionModels';

// import for util
import dotenv from 'dotenv';
import colors from 'colors';

// import for data
import transactions from './data/transactions';

// import for database
import connectDB from './config/db.js';

// --------------------------------------------------------

// initial enviroment variable
dotenv.config();

// connect to database
connectDB();

// import data
const importData = async () => {
  try {
    // clear collection returns promise
    await Transaction.deleteMany();

    // import the data
    await Transaction.insertMany(transactions);

    // shows data is import and exits
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    // shows the error in red in console and exits
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    // clear all data
    await Transaction.deleteMany();

    // shows data clear and exits
    console.log('Data Destoryed!'.red.inverse);
    process.exit();
  } catch (error) {
    // shows the error in red in console and exits
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

// node backend/seeder to import
if (process.argv[2] === '-d') {
  // with a -d at the end it deletes
  destoryData();
} else {
  importData();
}
