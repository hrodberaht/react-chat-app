import React, { Component, ChangeEvent } from 'react';
import getMessagesFromSocketIO from '../../shared/getMessagesFromSocketIO';
import ChatTitle from './ChatTitle';
import MessageList, { MessageInterface } from './MessageList';
import { Input } from '../shared/Input';
import Button from '../shared/Button';
import sendMessageToSocketIO from '../../shared/sendMessageToSocketIO';

interface State {
  message: MessageInterface;
  messages: Array<MessageInterface>;
}

export default class ChatWindow extends Component<{}, State> {
  componentDidMount() {
    getMessagesFromSocketIO((err: any, messages: Array<MessageInterface>) =>
      this.setState({ messages })
    );
  }

  initialMessage = {
    user: '',
    text: ''
  };

  readonly state = {
    message: this.initialMessage,
    messages: []
  };

  handleClick = () => {
    sendMessageToSocketIO(this.state.message.text);
    this.setState({ message: this.initialMessage });
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
