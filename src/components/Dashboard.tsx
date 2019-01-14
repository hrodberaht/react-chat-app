import React, { Component } from 'react';
import { connect } from 'react-redux';
import Register from './Register/Register';
import { StateInterface, UserInterface } from '../store/users/reducer';
import { getUsers } from '../store/users/selectors';
import ChatWindow from './Chat/ChatWindow';

interface State {
  isLogged: boolean;
}

export class Dashboard extends Component<{ users: Array<UserInterface> }, State> {
  readonly state = {
    isLogged: true
  };

  render(): React.ReactNode {
    if (this.state.isLogged) return <ChatWindow />;
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
