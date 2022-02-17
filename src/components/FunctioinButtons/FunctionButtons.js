import Clock from '../Clock';
import styles from './FunctionButtons.module.css';

const FunctionButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      <Clock />
    </div>
  );
};
export default FunctionButtons;
