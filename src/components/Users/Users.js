import { useState } from 'react';

import { IconContext } from 'react-icons';
import { CgLoadbarSound } from 'react-icons/cg';
import { VscPinned } from 'react-icons/vsc';
import { FaCat } from 'react-icons/fa';
import { BiMicrophoneOff } from 'react-icons/bi';
import { MdOutlineMoreVert } from 'react-icons/md';
import styles from './Users.module.css';

const Users = () => {
  const [hoverUserFirst, setHoverUserFirst] = useState(false);
  const [hoverUserSecond, setHoverUserSecond] = useState(false);

  const hoverDropdownUserFirst = () => {
    setHoverUserFirst(prev => !prev);
  };
  const hoverDropdownUserSecond = () => {
    setHoverUserSecond(prev => !prev);
  };
  return (
    <>
      <h6 className={styles.headerUsers}>Триває виклик</h6>
      <div>
        <ul>
          <li className={styles.user}>
            <div className={styles.userIcon}>
              <span className={styles.userIconContent}>A</span>
            </div>
            <div className={styles.nameUserContainer}>
              <h5 className={styles.username}>Андрій Копанський (Ви)</h5>
              <h6 className={styles.eventOrganizer}>Організатор зустрічі</h6>
            </div>
            <IconContext.Provider value={{ size: '25px', color: 'white' }}>
              <div className={styles.soundSignUser}>
                <CgLoadbarSound />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '25px', color: 'gray' }}>
              <div
                className={styles.userSigns}
                onMouseOut={() => hoverDropdownUserFirst()}
                onMouseOver={() => hoverDropdownUserFirst()}
              >
                <VscPinned />
              </div>
              <div
                className={styles.userSignsHoverFirst}
                style={{ display: hoverUserFirst ? 'block' : 'none' }}
              >
                <h6 className={styles.userSignsHoverTextFirst}>
                  Закріпити себе на своєму головному екрані
                </h6>
              </div>
            </IconContext.Provider>
          </li>
          <li className={styles.user}>
            <IconContext.Provider value={{ size: '20px', color: 'black' }}>
              <div className={styles.userSecondIcon}>
                <span className={styles.userIconContent}>
                  <FaCat />
                </span>
              </div>
            </IconContext.Provider>
            <div className={styles.nameUserContainer}>
              <h5 className={styles.username}>Не Ви)))</h5>
            </div>
            <IconContext.Provider value={{ size: '25px', color: 'gray' }}>
              <div className={styles.userSecondSigns}>
                <BiMicrophoneOff />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '25px', color: 'gray' }}>
              <div
                className={styles.userSecondSigns}
                onMouseOut={() => hoverDropdownUserSecond()}
                onMouseOver={() => hoverDropdownUserSecond()}
              >
                <MdOutlineMoreVert />
              </div>
              <div
                className={styles.userSignsHoverSecond}
                style={{ display: hoverUserSecond ? 'block' : 'none' }}
              >
                <h6 className={styles.userSignsHoverTextSecond}>Інші дії</h6>
              </div>
            </IconContext.Provider>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Users;
