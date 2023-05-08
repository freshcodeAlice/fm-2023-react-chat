import React, {useState} from 'react';
import styles from './MessageArea.module.css';

const MessageArea = (props) => {
    const [text, setText] = useState();

    const textareaHandler = ({target: {value}}) => {
        setText(value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.addMessage(text);
    }

    return (
        <form className={styles['message-area']} onSubmit={submitHandler}>
           <textarea className={styles['text-area']} value={text} onChange={textareaHandler}/>
           <button className={styles.button} type="submit"></button>
        </form>
    );
}

export default MessageArea;
