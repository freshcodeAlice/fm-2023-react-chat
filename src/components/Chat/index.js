import React, {useRef, useEffect} from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem';

const Chat = (props) => {
  const chatEndPoint = useRef(null);

  const scrollIntoEndPoint = () => {
    chatEndPoint.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  useEffect(() => {
    scrollIntoEndPoint();
  }, [props.messages]);

  const {messages} = props;
  const mapToChat = messages.map(m => <ChatItem message={m} key={m.id}/>) 
    return (
        <div className={styles['chat']}>
          {mapToChat}
          <div ref={chatEndPoint}></div>
        </div>
    );
}

export default Chat;
