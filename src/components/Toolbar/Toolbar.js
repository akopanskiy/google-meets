import { IconContext } from 'react-icons';

import { AiTwotoneEdit, AiOutlineSetting } from 'react-icons/ai';
import {
  MdOutlineDashboard,
  MdOutlineFullscreen,
  MdClosedCaptionOff,
} from 'react-icons/md';
import { BsStars, BsExclamationOctagon } from 'react-icons/bs';
import { BiMessageError } from 'react-icons/bi';
import { FaSearchengin } from 'react-icons/fa';

import styles from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <>
      <div className={styles.itemContainerFirst}>
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
      <div className={styles.border}></div>
      <div className={styles.itemContainerSecond}>
        <ul>
          <IconContext.Provider value={{ size: '20px', color: '#696969' }}>
            <li className={styles.toolbarItem}>
              <BiMessageError />
              <h5>Повідомити про проблему</h5>
            </li>
            <li className={styles.toolbarItem}>
              <BsExclamationOctagon />
              <h5>Повідомити про порушення</h5>
            </li>
            <li className={styles.toolbarItem}>
              <FaSearchengin />
              <h5>Вирішення проблем і довідка</h5>
            </li>
            <li className={styles.toolbarItem}>
              <AiOutlineSetting />
              <h5>Налаштування</h5>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </>
  );
};
export default Toolbar;
