import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { VisibleDropdownContext } from '../../context/visibleDropdown';

import userImg from '../../images/userWindowImg.jpg';
import { BiMicrophoneOff } from 'react-icons/bi';
import styles from './UserWindow.module.css';

const UserWindow = () => {
  const { visible } = useContext(VisibleDropdownContext);

  return (
    <div
      className={styles.userWindowContainer}
      style={{ right: visible ? '400px' : '20px' }}
    >
      <img src={userImg} alt="you:-)))" className={styles.userImg} />
      <span className={styles.userWindowName}>Ви</span>
      <IconContext.Provider value={{ size: '20px', color: 'white' }}>
        <div className={styles.activeUserImg}>
          <BiMicrophoneOff />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default UserWindow;
