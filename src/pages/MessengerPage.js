import React from 'react';
import Dashboard from '../components/Dashboard';
import styles from './Messenger.module.css';

const MessengerPage = () => {
    return (
        <div className={styles['messanger-wrapper']}>
            <Dashboard />
        </div>
    );
}

export default MessengerPage;
