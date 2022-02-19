import InterlocutorsWindow from './components/InterlocutorsWindow';
import FunctionPanel from './components/FunctionPanel';
import DropDown from './components/Dropdown/Dropdown';
import { useState } from 'react';
import { VisibleDropdownContext } from './context/visibleDropdown';

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(prev => !prev);
  };
  return (
    <>
      <VisibleDropdownContext.Provider value={{ visible, toggleDropdown }}>
        <InterlocutorsWindow />
        <FunctionPanel onClick={toggleDropdown} visible={visible} />
        <DropDown onClick={toggleDropdown} visible={visible} />
      </VisibleDropdownContext.Provider>
    </>
  );
};

export default App;
