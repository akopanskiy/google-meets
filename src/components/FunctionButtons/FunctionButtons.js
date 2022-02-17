import { BiInfoCircle } from 'react-icons/bi';
import {
  MdOutlinePeopleOutline,
  MdOutlineChat,
  MdOutlineCategory,
} from 'react-icons/md';
import styles from './FunctionButtons.module.css';

const FunctionButtons = () => {
  return (
    <div className={styles.functionButtonsContainer}>
      <button type="button" className={styles.button}>
        <BiInfoCircle />
      </button>
      <button type="button" className={styles.button}>
        <MdOutlinePeopleOutline />
      </button>
      <button type="button" className={styles.button}>
        <MdOutlineChat />
      </button>
      <button type="button" className={styles.button}>
        <MdOutlineCategory />
      </button>
      <button type="button" className={styles.button}></button>
    </div>
  );
};

export default FunctionButtons;
