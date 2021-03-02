import React, { useContext } from 'react';
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpanseTrackerContext } from '../../../context/context';
import useStyles from './style';

const List = () => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(ExpanseTrackerContext);

  const transactions = [
    {
      id: 1,
      type: 'Income',
      category: 'Salary',
      amount: 50,
      date: 'Sat Feb 27',
    },
    {
      id: 2,
      type: 'Expanse',
      category: 'Food',
      amount: 20,
      date: 'Mon Feb 22',
    },
    {
      id: 3,
      type: 'Expanse',
      category: 'Drinks',
      amount: 10,
      date: 'Sat Feb 27',
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction='down'
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='delete' onClick=''>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
