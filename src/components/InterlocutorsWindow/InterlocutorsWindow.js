import { useState } from 'react';
import styles from './InterlocutorsWindow.module.css';
import defaultImg from '../../images/headImg.jpg';
import fetchImages from '../../services/imgAPI';

const InterlocutorsWindow = () => {
  const [image, setImage] = useState('');
  const getImage = () => {
    fetchImages().then(res =>
      setImage(res.data.hits[Math.floor(Math.random() * res.data.hits.length)]),
    );
  };
  return (
    <div className={styles.headWindow}>
      <img
        src={image === '' ? defaultImg : image.largeImageURL}
        alt="some mems"
        className={styles.img}
        onClick={getImage}
      />
    </div>
  );
};
export default InterlocutorsWindow;
