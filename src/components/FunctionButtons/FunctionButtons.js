import { useContext } from 'react';
import { VisibleDropdownContext } from '../../context/visibleDropdown';

import { BiInfoCircle } from 'react-icons/bi';
import {
  MdOutlinePeopleOutline,
  MdOutlineChat,
  MdOutlineCategory,
  MdGppMaybe,
} from 'react-icons/md';
import { IconContext } from 'react-icons';
import styles from './FunctionButtons.module.css';

const FunctionButtons = () => {
  const { toggleDropdown } = useContext(VisibleDropdownContext);

  return (
    <div className={styles.functionButtonsContainer}>
      <IconContext.Provider value={{ size: '25px' }}>
        <button type="button" className={styles.button}>
          <BiInfoCircle />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={toggleDropdown}
        >
          <MdOutlinePeopleOutline />
        </button>
        <button type="button" className={styles.button}>
          <MdOutlineChat />
        </button>
        <button type="button" className={styles.button}>
          <MdOutlineCategory />
        </button>
        <button type="button" className={styles.button}>
          <MdGppMaybe />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default FunctionButtons;
