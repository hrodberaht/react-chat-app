import React, { Component, Fragment, FC, MouseEvent } from 'react';
import Dashboard from './components/Dashboard';

export interface Name {
  name: string;
  children: number;
}

class MyState {
  readonly count: number = 0;
}

const Test: FC<Name> = props => (
  <p>
    {props.name} {props.children}
  </p>
);

class App extends Component {
  render(): React.ReactNode {
    return (
      <Fragment>
        <Test name="check">{2}</Test>
        <Add name="test">{4}</Add>
        <Dashboard count={2}/>
      </Fragment>
    );
  }
}

export interface State {
  name: string;
}

interface HandleClickFunc {
  (e: MouseEvent<HTMLElement>): void;
}

class Add extends Component<Name, State> {
  readonly state: State = {
    name: 'home',
  };

  private handleClick: HandleClickFunc = () =>
    this.setState({ name: 'test' });
  render() {
    return (
      <Fragment>
        <h1>{this.state.name}</h1>
        <Button onClick={this.handleClick} />
      </Fragment>
    );
  }
}

type ButtonProps = {
  onClick(e: MouseEvent<HTMLElement>): void;
  color?: string;
};

const Button: FC<ButtonProps> = ({ onClick: handleClick, color }) => (
  <button
    style={{ color: color }}
    type="button"
    onClick={handleClick}
  >
    Test
  </button>
);

export default App;
