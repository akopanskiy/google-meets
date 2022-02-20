import Search from '../Search';
import Users from '../Users';
import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { VisibleDropdownContext } from '../../context/visibleDropdown';

import { IoMdClose } from 'react-icons/io';
import { BiMicrophoneOff } from 'react-icons/bi';
import { BsPersonPlus } from 'react-icons/bs';
import { MdOutlineToggleOn } from 'react-icons/md';
import styles from './Dropdown.module.css';

import React from 'react';

const DropDown = () => {
  const { visible, toggleDropdown, activeHover, hoverDropdown } = useContext(
    VisibleDropdownContext,
  );

  return (
    <>
      {visible && (
        <div className={styles.containerDropdown}>
          <IconContext.Provider value={{ size: '20px', color: 'gray' }}>
            <div className={styles.headerDropdown}>
              <h3>Люди</h3>
              <button
                type="button"
                onClick={toggleDropdown}
                className={styles.closeDropdown}
                onMouseOut={() => hoverDropdown()}
                onMouseOver={() => hoverDropdown()}
              >
                <IoMdClose />
              </button>
              <div
                className={styles.hoverExitDropdown}
                style={{ display: activeHover ? 'block' : 'none' }}
              >
                <h6 className={styles.hoverExitDropdownText}>Вихід</h6>
              </div>
            </div>

            <div className={styles.navButtonDropdown}>
              <button type="button" className={styles.navButton}>
                <BiMicrophoneOff />
              </button>

              <button type="button" className={styles.navButton}>
                <BsPersonPlus />
              </button>

              <button type="button" className={styles.navButton}>
                <MdOutlineToggleOn />
              </button>
            </div>
            <div className={styles.navText}>
              <div className={styles.nameButton}>
                <h5 className={styles.nameButtonText}>Мікрофони всіх</h5>
                <h5 className={styles.nameButtonText}>учасників</h5>
                <h5 className={styles.nameButtonText}>вимкнено</h5>
              </div>
              <div className={styles.nameButton}>
                <h5 className={styles.nameButtonText}>Додати</h5>
                <h5 className={styles.nameButtonText}>людей</h5>
              </div>
              <div className={styles.nameButton}>
                <h5 className={styles.nameButtonText}>Керування</h5>
                <h5 className={styles.nameButtonText}> зустріччю</h5>
              </div>
            </div>
            <Search />
            <Users />
          </IconContext.Provider>
        </div>
      )}
    </>
  );
};
export default DropDown;
