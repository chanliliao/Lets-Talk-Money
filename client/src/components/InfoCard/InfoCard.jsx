import React from 'react';

const InfoCard = () => {
  const isIncome = Math.round(Math.random());

  return (
    <div style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br />
      Add {isIncome ? 'Income ' : 'Expense '}
      for {isIncome ? '$100 ' : '$200 '}
      in Category {isIncome ? 'Business ' : 'House '}
      for {isIncome ? 'Sunday ' : 'Friday '}
    </div>
  );
};

export default InfoCard;
