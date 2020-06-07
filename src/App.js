import React from 'react';
import Tuner from './components/Tuner';
import { Provider } from 'react-redux';
import { Store } from './store';
import { Main } from "./global.js";

import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <Main className='App'>
        <Tuner />
      </Main>
    </Provider>
  );
}

export default App;
