import React from 'react';

// material import
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

// chart import
import { Doughnut } from 'react-chartjs-2';

// custom hooks
import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({ title, subheader }) => {
  // hooks
  const classes = useStyles();

  // context
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant='h4'>
          ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
