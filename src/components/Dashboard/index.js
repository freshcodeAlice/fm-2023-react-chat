import React, {useState, useReducer, useEffect} from 'react';
import styles from './Dashboard.module.css';
import DialogList from '../DialogList';
import Chat from '../Chat';
import MessageArea from '../MessageArea';
import { getMessages } from '../../api/getMessages';
import reducer from '../../reducers/messageReducer';
import { CONSTANTS } from '../../constants';
const {ACTIONTYPES} = CONSTANTS; 

const Dashboard = () => {
    const [user, setUser] = useState({
        id: 0,
        username: 'User',
        imageSrc: '/images/userimage.png'
    });
    const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null
    });

    useEffect(()=>{
        getMessages()
        .then(data => {
            dispatch({
                type: ACTIONTYPES.GET_MESSAGE_SUCCESS,
                payload: data.comments
            })
        }).catch(error => {
            dispatch({
                type: ACTIONTYPES.GET_MESSAGE_ERROR,
                error
            })
        })
    }, []);

    const createNewMessage = (text) => {
        const newMessage = {
            body: text,
            id: state.messages.length+1,
            user
        }
        dispatch({
            type: ACTIONTYPES.ADD_NEW_MESSAGE,
            payload: newMessage
        });
    }

    return (
        <div className={styles['flex-row']}>
        <DialogList /> 
        <div className={styles['flex-column']}>
            <Chat messages={state.messages}/> 
            <MessageArea addMessage={createNewMessage}/> 
            </div>
        </div>
    );
}

export default Dashboard;
