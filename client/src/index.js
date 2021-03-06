import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId='a28d2011-b18b-4776-b264-2986713c17bc' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
