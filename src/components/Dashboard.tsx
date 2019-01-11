import React, { Component } from 'react';
import Button from './shared/Button';

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
        <p>Dashboard</p>
        <h1>{this.state.name}</h1>
        <Button onClick={this.changeName} name="Change name" />
        <Button onClick={this.showAlert} name="ClickMe" className="btn btn-primary" />
      </div>
    );
  }
}
