import Modal from '../Modal';

import { useState } from 'react';

import { IconContext } from 'react-icons';
import { AiFillAudio } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { MdOpenInBrowser, MdOutlineMoreVert } from 'react-icons/md';
import { ImPhoneHangUp } from 'react-icons/im';

import styles from './ControlButtons.module.css';

const ControlButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeHoverCBFirst, setActiveHoverCBFirst] = useState(false);
  const [activeHoverCBSecond, setActiveHoverCBSecond] = useState(false);
  const [activeHoverCBThird, setActiveHoverCBThird] = useState(false);
  const [activeHoverCBFourth, setActiveHoverCBFourth] = useState(false);
  const [activeHoverCBFifth, setActiveHoverCBFifth] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };
  const hoverDropdownCBFirst = () => {
    setActiveHoverCBFirst(prev => !prev);
  };
  const hoverDropdownCBSecond = () => {
    setActiveHoverCBSecond(prev => !prev);
  };
  const hoverDropdownCBThird = () => {
    setActiveHoverCBThird(prev => !prev);
  };
  const hoverDropdownCBFourth = () => {
    setActiveHoverCBFourth(prev => !prev);
  };
  const hoverDropdownCBFifth = () => {
    setActiveHoverCBFifth(prev => !prev);
  };
  return (
    <>
      <div className={styles.controlButtonsContainer}>
        <IconContext.Provider value={{ size: '20px' }}>
          <div
            className={styles.hoverBtnDropdownFirst}
            style={{ display: activeHoverCBFirst ? 'block' : 'none' }}
          >
            <h6 className={styles.hoverBtnDropdownText}>
              Вимкнути мікрофон (ctrl + d)
            </h6>
          </div>
          <button
            type="button"
            className={styles.button}
            onMouseOut={() => hoverDropdownCBFirst()}
            onMouseOver={() => hoverDropdownCBFirst()}
          >
            <AiFillAudio />
          </button>

          <div
            className={styles.hoverBtnDropdownSecond}
            style={{ display: activeHoverCBSecond ? 'block' : 'none' }}
          >
            <h6 className={styles.hoverBtnDropdownText}>
              Вимкнути камеру (ctrl + e)
            </h6>
          </div>
          <button
            type="button"
            className={styles.button}
            onMouseOut={() => hoverDropdownCBSecond()}
            onMouseOver={() => hoverDropdownCBSecond()}
          >
            <FiVideo />
          </button>

          <div
            className={styles.hoverBtnDropdownThird}
            style={{ display: activeHoverCBThird ? 'block' : 'none' }}
          >
            <h6 className={styles.hoverBtnDropdownText}>
              Розпочати презентацію зараз
            </h6>
          </div>
          <button
            type="button"
            className={styles.button}
            onMouseOut={() => hoverDropdownCBThird()}
            onMouseOver={() => hoverDropdownCBThird()}
          >
            <MdOpenInBrowser />
          </button>

          <div
            className={styles.hoverBtnDropdownFourth}
            style={{ display: activeHoverCBFourth ? 'block' : 'none' }}
          >
            <h6 className={styles.hoverBtnDropdownText}>Інші опції</h6>
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={toggleModal}
            onMouseOut={() => hoverDropdownCBFourth()}
            onMouseOver={() => hoverDropdownCBFourth()}
          >
            <MdOutlineMoreVert />
          </button>

          <div
            className={styles.hoverBtnDropdownFifth}
            style={{ display: activeHoverCBFifth ? 'block' : 'none' }}
          >
            <h6 className={styles.hoverBtnDropdownText}>Завершити дзвінок</h6>
          </div>
          <button
            type="button"
            className={styles.callEndButton}
            onMouseOut={() => hoverDropdownCBFifth()}
            onMouseOver={() => hoverDropdownCBFifth()}
          >
            <ImPhoneHangUp />
          </button>
        </IconContext.Provider>
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default ControlButtons;
