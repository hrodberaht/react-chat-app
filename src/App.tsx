import React, { Component, Fragment } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  render(): React.ReactNode {
    return (
      <Fragment>
        <Dashboard />
      </Fragment>
    );
  }
}

export default App;
