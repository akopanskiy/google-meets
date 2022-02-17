import React from 'react';
import Moment from 'react-moment';
import styles from './Clock.module.css';

const Clock = () => {
  return (
    <div className={styles.firstBlock}>
      <Moment format="HH:mm" className={styles.clock}>
        {Date.now()}
      </Moment>
      <span className={styles.linkMeet}>|</span>
      <span className={styles.linkMeet}>sup-bopa-xrk</span>
    </div>
  );
};

export default Clock;
