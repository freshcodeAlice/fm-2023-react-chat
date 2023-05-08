import React from 'react';
import styles from './Dashboard.module.css';
import DialogList from '../DialogList';
import Chat from '../Chat';
import MessageArea from '../MessageArea';

const Dashboard = () => {
    return (
        <div className={styles['flex-row']}>
        <DialogList /> 
        <div className={styles['flex-column']}>
            <Chat /> 
            <MessageArea /> 
            </div>
        </div>
    );
}

export default Dashboard;
