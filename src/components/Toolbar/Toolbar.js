import { IconContext } from 'react-icons';

import { AiTwotoneEdit } from 'react-icons/ai';
import {
  MdOutlineDashboard,
  MdOutlineFullscreen,
  MdClosedCaptionOff,
} from 'react-icons/md';
import { BsStars } from 'react-icons/bs';

import styles from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <div>
      <ul>
        <IconContext.Provider value={{ size: '20px', color: '#696969' }}>
          <li className={styles.toolbarItem}>
            <AiTwotoneEdit />
            <div className={styles.textContainer}>
              <h5>Дошка для конференцій</h5>
              <span>Відкрити файл Jam</span>
            </div>
          </li>
          <li className={styles.toolbarItem}>
            <MdOutlineDashboard />
            <h5>Змінити макет</h5>
          </li>
          <li className={styles.toolbarItem}>
            <MdOutlineFullscreen />
            <h5>Повноукранний режим</h5>
          </li>
          <li className={styles.toolbarItem}>
            <BsStars />
            <h5>Застосувати візуальні ефекти</h5>
          </li>
          <li className={styles.toolbarItem}>
            <MdClosedCaptionOff />
            <div className={styles.textContainer}>
              <h5>Субтитри</h5>
              <span>Вимкнено</span>
            </div>
          </li>
        </IconContext.Provider>
      </ul>
    </div>
  );
};
export default Toolbar;
