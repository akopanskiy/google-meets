import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Moment from 'react-moment';
import styles from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const intervalID = useRef(null);

  useEffect(() => {
    intervalID.current = setInterval(() => tick(), 1000);
  }, []);

  const tick = () => {
    setTime(new Date());
  };
  return (
    <div className={styles.firstBlock}>
      <Moment format="HH:mm" className={styles.clock}>
        {time}
      </Moment>
      <span className={styles.linkMeet}>|</span>
      <span className={styles.linkMeet}>sup-bopa-xrk</span>
    </div>
  );
};

export default Clock;
