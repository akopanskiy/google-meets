import Clock from '../Clock';
import ControlButtons from '../ControlButtons';
import styles from './FunctionButtons.module.css';

const FunctionButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      <Clock />
      <ControlButtons />
    </div>
  );
};
export default FunctionButtons;
