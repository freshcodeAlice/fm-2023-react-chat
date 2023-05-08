import React from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem';

const Chat = (props) => {
  const {messages} = props;
  const mapToChat = messages.map(m => <ChatItem message={m}/>) 
    return (
        <div className={styles['chat']}>
          {mapToChat}
        </div>
    );
}

export default Chat;
