import React, { Component } from 'react';
import ChatTitle from './ChatTitle';
import MessageList, { MessageInterface } from './MessageList';
import { Input } from '../shared/Input';
import Button from '../shared/Button';

const messages: Array<MessageInterface> = [
  { user: 'john', text: '1234' },
  { user: 'mark', text: '4321' }
];

export default class ChatWindow extends Component {
  handleClick = () => alert('message send');

  render() {
    return (
      <div className="chat-window">
        <ChatTitle title="My chat" />
        <MessageList messages={messages} />
        <Input label="message" className="chat-window__input" />
        <Button onClick={this.handleClick} name="Send" />
      </div>
    );
  }
}
