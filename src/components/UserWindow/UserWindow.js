import { useContext } from 'react';
import { VisibleDropdownContext } from '../../context/visibleDropdown';

import userImg from '../../images/userWindowImg.jpg';
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
    </div>
  );
};

export default UserWindow;
