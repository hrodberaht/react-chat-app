import React, { Component } from 'react';
import Register from './Register/Register';
import { connect } from 'react-redux';
import { StateInterface, UserInterface } from '../store/users/reducer';
import { getUsers } from '../store/users/selectors';

interface State {
  isLogged: boolean;
}

export class Dashboard extends Component<{ users: Array<UserInterface> }, State> {
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

const mapStateToProps = (state: StateInterface) => ({
  users: getUsers(state)
});

export default connect(mapStateToProps)(Dashboard);
