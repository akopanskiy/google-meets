import Clock from '../Clock';
import ControlButtons from '../ControlButtons';
import FunctionButtons from '../FunctionButtons/FunctionButtons';
import styles from './FunctionPanel.module.css';

const FunctionPanel = () => {
  return (
    <div className={styles.buttonContainer}>
      <Clock />
      <ControlButtons />
      <FunctionButtons />
    </div>
  );
};
export default FunctionPanel;
