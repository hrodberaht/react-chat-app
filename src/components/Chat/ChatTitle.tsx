import React, { FC } from 'react';

interface TitleInterface {
  title: string;
}

const ChatTitle: FC<TitleInterface> = ({ title }) => <h2>{title}</h2>;

export default ChatTitle;
