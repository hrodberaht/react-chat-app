import React, { Component, Fragment } from 'react';
import { Input } from '../shared/Input';
import Button from '../shared/Button';

export default class Register extends Component<{}, {}> {
  handleClick = () => alert('You are register');

  render() {
    return (
      <div className="register">
        <div className="register__inner">
          <Input className="input" label="Nick" />
          <Input className="input" label="Password" />
          <Button className="btn btn-primary" onClick={this.handleClick} name="Register" />
        </div>
      </div>
    );
  }
}
