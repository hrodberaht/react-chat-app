import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './shared/Button';
import { StateInterface, UserInterface } from '../store/users/reducer';
import { getUsers } from '../store/users/selectors';

interface State {
  name: string;
}

export class Dashboard extends Component<{ users: Array<UserInterface> }, State> {
  readonly state = {
    name: 'string'
  };

  showAlert = () => alert('hello');

  changeName = () => this.setState({ name: '1234' });

  render(): React.ReactNode {
    return (
      <div>
        <p>
          User:
          {this.props.users[0].name}
        </p>
        <Button onClick={this.changeName} name="Change name" />
      </div>
    );
  }
}

const mapStateToProps = (state: StateInterface) => ({
  users: getUsers(state)
});

export default connect(mapStateToProps)(Dashboard);
