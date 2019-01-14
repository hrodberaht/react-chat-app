import React, { Component, ChangeEvent } from 'react';
import ChatTitle from './ChatTitle';
import MessageList, { MessageInterface } from './MessageList';
import { Input } from '../shared/Input';
import Button from '../shared/Button';

interface State {
  message: MessageInterface;
  messages: Array<MessageInterface>;
}

export default class ChatWindow extends Component<{}, State> {
  initialMessage = {
    user: '',
    text: ''
  };

  readonly state = {
    message: this.initialMessage,
    messages: [{ user: 'john', text: '1234' }, { user: 'mark', text: '4321' }]
  };

  handleClick = () => {
    this.setState(state => ({
      messages: [...state.messages, state.message],
      message: this.initialMessage
    }));
  };

  handleChange = (e: any) => {
    const message: MessageInterface = {
      user: 'john',
      text: e.target.value
    };
    this.setState({ message });
  };

  render() {
    const {
      messages,
      message: { text }
    } = this.state;
    return (
      <div className="chat-window">
        <ChatTitle title="My chat" />
        <MessageList messages={messages} />
        <Input
          label="message"
          className="chat-window__input"
          onChange={this.handleChange}
          initialValue={text}
        />
        <Button onClick={this.handleClick} name="Send" />
      </div>
    );
  }
}
