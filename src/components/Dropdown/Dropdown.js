import Search from '../Search';
import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { VisibleDropdownContext } from '../../context/visibleDropdown';

import { IoMdClose } from 'react-icons/io';
import { BiMicrophoneOff } from 'react-icons/bi';
import { BsPersonPlus } from 'react-icons/bs';
import { MdOutlineToggleOn } from 'react-icons/md';
import styles from './Dropdown.module.css';

const DropDown = () => {
  const { visible } = useContext(VisibleDropdownContext);
  const { toggleDropdown } = useContext(VisibleDropdownContext);

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
              >
                <IoMdClose />
              </button>
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
                <h5 className={styles.h5}>Мікрофони всіх</h5>
                <h5 className={styles.h5}>учасників</h5>
                <h5 className={styles.h5}>вимкнено</h5>
              </div>
              <div className={styles.nameButton}>
                <h5 className={styles.h5}>Додати</h5>
                <h5 className={styles.h5}>людей</h5>
              </div>
              <div className={styles.nameButton}>
                <h5 className={styles.h5}>Керування</h5>
                <h5 className={styles.h5}> зустріччю</h5>
              </div>
            </div>
            <Search />
          </IconContext.Provider>
        </div>
      )}
    </>
  );
};
export default DropDown;
