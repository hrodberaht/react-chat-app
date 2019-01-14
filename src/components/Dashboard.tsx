import React, { Component } from 'react';
import Register from './Register/Register';

interface State {
  isLogged: boolean;
}

export default class Dashboard extends Component<{}, State> {
  readonly state = {
    isLogged: true
  };

  render(): React.ReactNode {
    if (this.state.isLogged) return <h1>Chat</h1>;
    return (
      <div>
        <Register />
      </div>
    );
  }
}
