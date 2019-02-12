import React, { Component, Fragment } from 'react';

import Searcher from './components/searcher/searcher'
import History from './components/history/history'
import './App.css';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Searcher />
        <History />
      </Fragment>
    );
  }
}

export default App;
