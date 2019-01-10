import React, { Component } from 'react';

interface State {
  name: string;
}

interface Props {
  count?: number;
}

export default class Dashboard extends Component<Props, State> {
  readonly state = {
    name: 'string',
  };

  render(): React.ReactNode {
    return <p>Dashboard {this.props.count}</p>;
  }
}
