import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/details/Details';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spaceing={0}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='Expanse' />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;