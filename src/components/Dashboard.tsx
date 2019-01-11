import React, { Component } from 'react';
import Button from './shared/Button';
import Register from './Register/Register';

interface State {
  name: string;
}

export default class Dashboard extends Component<{}, State> {
  readonly state = {
    name: 'string'
  };

  showAlert = () => alert('hello');

  changeName = () => this.setState({ name: '1234' });

  render(): React.ReactNode {
    return (
      <div>
        <Register />
      </div>
    );
  }
}
