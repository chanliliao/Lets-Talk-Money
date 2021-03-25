import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from '@speechly/react-ui';
import Details from './components/details/Details';
import Main from './components/main/Main';
import { SpeechState, useSpeechContext } from '@speechly/react-client';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => {
    main.current.scrollIntoView();
  };

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, []);

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
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title='Income' />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title='Expense' />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton captureKey=' ' />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
