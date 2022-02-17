import { AiFillAudio } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { MdOpenInBrowser, MdOutlineMoreVert } from 'react-icons/md';
import { ImPhoneHangUp } from 'react-icons/im';
import styles from './ControlButtons.module.css';
import { IconContext } from 'react-icons';

const ControlButtons = () => {
  return (
    <div className={styles.controlButtonsContainer}>
      <IconContext.Provider value={{ size: '20px' }}>
        <button type="button" className={styles.button}>
          <AiFillAudio />
        </button>
        <button type="button" className={styles.button}>
          <FiVideo />
        </button>
        <button type="button" className={styles.button}>
          <MdOpenInBrowser />
        </button>
        <button type="button" className={styles.button}>
          <MdOutlineMoreVert />
        </button>
        <button type="button" className={styles.callEndButton}>
          <ImPhoneHangUp />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default ControlButtons;
