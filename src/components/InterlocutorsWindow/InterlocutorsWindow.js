import { useState, useContext } from 'react';
import { IconContext } from 'react-icons';
import { VisibleDropdownContext } from '../../context/visibleDropdown';

import defaultImg from '../../images/headImg.jpg';
import fetchImages from '../../services/imgAPI';

import { BiMicrophoneOff } from 'react-icons/bi';
import styles from './InterlocutorsWindow.module.css';

const InterlocutorsWindow = () => {
  const [image, setImage] = useState('');
  const { visible } = useContext(VisibleDropdownContext);

  const getImage = () => {
    fetchImages().then(res =>
      setImage(res.data.hits[Math.floor(Math.random() * res.data.hits.length)]),
    );
  };

  return (
    <div
      className={styles.headWindow}
      style={{
        width: visible ? '73.5vw' : '87vw',
        marginLeft: visible ? '15px' : 'auto',
      }}
    >
      <img
        src={image === '' ? defaultImg : image.largeImageURL}
        alt="some mems"
        style={{ borderRadius: '10px' }}
        className={styles.img}
        onClick={getImage}
      />
      <span
        className={styles.nameInterlocutor}
        style={{ left: visible ? '18px' : '105px' }}
      >
        Someone on the other side of the screen
      </span>
      <IconContext.Provider value={{ size: '20px', color: 'white' }}>
        <div className={styles.activeUserImg}>
          <BiMicrophoneOff />
        </div>
      </IconContext.Provider>
    </div>
  );
};
export default InterlocutorsWindow;
