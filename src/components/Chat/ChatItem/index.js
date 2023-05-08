import React from 'react';
import styles from '../Chat.module.css';

const ChatItem = (props) => {
    const {message: {body}} = props;
    return (
        <div className={styles['chat-item']}>
            <img src='/images/images.png' className={styles['message-avatar']}/>
            <div className={styles['message-body']}>{body}</div>
        </div>
    );
}

export default ChatItem;


/*

body
id
*/
