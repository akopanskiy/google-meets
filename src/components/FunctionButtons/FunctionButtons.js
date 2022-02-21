import { useState, useContext } from 'react';
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
  const { disabled, toggleDropdown } = useContext(VisibleDropdownContext);
  const [activeHoverFBFirst, setActiveHoverFBFirst] = useState(false);
  const [activeHoverFBSecond, setActiveHoverFBSecond] = useState(false);
  const [activeHoverFBThird, setActiveHoverFBThird] = useState(false);
  const [activeHoverFBFourth, setActiveHoverFBFourth] = useState(false);
  const [activeHoverFBFifth, setActiveHoverFBFifth] = useState(false);

  const hoverDropdownFBFirst = () => {
    setActiveHoverFBFirst(prev => !prev);
  };
  const hoverDropdownFBSecond = () => {
    setActiveHoverFBSecond(prev => !prev);
  };
  const hoverDropdownFBThird = () => {
    setActiveHoverFBThird(prev => !prev);
  };
  const hoverDropdownFBFourth = () => {
    setActiveHoverFBFourth(prev => !prev);
  };
  const hoverDropdownFBFifth = () => {
    setActiveHoverFBFifth(prev => !prev);
  };
  return (
    <div className={styles.functionButtonsContainer}>
      <IconContext.Provider value={{ size: '25px' }}>
        <div
          className={styles.hoverBtnDropdownFirst}
          style={{ display: activeHoverFBFirst ? 'block' : 'none' }}
        >
          <h6 className={styles.hoverBtnDropdownText}>Деталі зустрічі</h6>
        </div>
        <button
          type="button"
          className={styles.button}
          onMouseOut={() => hoverDropdownFBFirst()}
          onMouseOver={() => hoverDropdownFBFirst()}
        >
          <BiInfoCircle />
        </button>

        <div
          className={styles.hoverBtnDropdownSecond}
          style={{ display: activeHoverFBSecond ? 'block' : 'none' }}
        >
          <h6 className={styles.hoverBtnDropdownText}>Показати всіх</h6>
        </div>

        <div className={styles.numberOfUsers}>
          <h6 className={styles.numberOfUsersText}>2</h6>
        </div>

        <button
          type="button"
          className={styles.button}
          style={{ color: disabled ? '#00BFFF' : 'white' }}
          onClick={toggleDropdown}
          onMouseOut={() => hoverDropdownFBSecond()}
          onMouseOver={() => hoverDropdownFBSecond()}
        >
          <MdOutlinePeopleOutline />
        </button>

        <div
          className={styles.hoverBtnDropdownThird}
          style={{ display: activeHoverFBThird ? 'block' : 'none' }}
        >
          <h6 className={styles.hoverBtnDropdownText}>Почати чат з усіма</h6>
        </div>
        <button
          type="button"
          className={styles.button}
          onMouseOut={() => hoverDropdownFBThird()}
          onMouseOver={() => hoverDropdownFBThird()}
        >
          <MdOutlineChat />
        </button>

        <div
          className={styles.hoverBtnDropdownFourth}
          style={{ display: activeHoverFBFourth ? 'block' : 'none' }}
        >
          <h6 className={styles.hoverBtnDropdownTextFirth}>Дії</h6>
        </div>
        <button
          type="button"
          className={styles.button}
          onMouseOut={() => hoverDropdownFBFourth()}
          onMouseOver={() => hoverDropdownFBFourth()}
        >
          <MdOutlineCategory />
        </button>

        <div
          className={styles.hoverBtnDropdownFifth}
          style={{ display: activeHoverFBFifth ? 'block' : 'none' }}
        >
          <h6 className={styles.hoverBtnDropdownTextFirth}>
            Керування зустріччю
          </h6>
        </div>
        <button
          type="button"
          className={styles.button}
          onMouseOut={() => hoverDropdownFBFifth()}
          onMouseOver={() => hoverDropdownFBFifth()}
        >
          <MdGppMaybe />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default FunctionButtons;
