import React, { FC } from 'react';

export interface MessageInterface {
  user: string;
  text: string;
}

interface MessagesInterface {
  messages: MessageInterface[];
}

const MessageList: FC<MessagesInterface> = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <div key={index}>
        <p>{message.user}</p>
        <p>{message.text}</p>
      </div>
    ))}
  </div>
);

export default MessageList;
