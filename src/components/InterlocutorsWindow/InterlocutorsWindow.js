import { useState, useContext } from 'react';
import styles from './InterlocutorsWindow.module.css';
import defaultImg from '../../images/headImg.jpg';
import fetchImages from '../../services/imgAPI';
import { VisibleDropdownContext } from '../../context/visibleDropdown';

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
    </div>
  );
};
export default InterlocutorsWindow;
