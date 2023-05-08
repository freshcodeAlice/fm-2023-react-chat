import React, { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import styles from '../Chat.module.css';
import cx from 'classnames';

const ChatItem = (props) => {
    const currentUser = useContext(UserContext);

    const { message: { body, user } } = props;
    // user.id === currentUser.id

    const img = user.id === currentUser.id ? '/images/userimage.png' : '/images/images.png';
    const cn = cx(styles['chat-item'], {
        [styles['item-left']]: user.id === currentUser.id
    })
    return (
            <div className={cn}>
                <img src={img} className={styles['message-avatar']} />
                <div className={styles['message-body']}>{body}</div>
            </div>

    );
}

export default ChatItem;

