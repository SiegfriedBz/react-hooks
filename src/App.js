import { useState, useRef } from "react";
import Modal from "./Modal";
import { useLocalStorage } from "./useLocalStorage";
import usePrevious from "./usePrevious"
import "./App.css";

function App() {
  const [value, setValue] = useLocalStorage("name", "Sieg");

  // 
  const prevValue = usePrevious(value);
  // 

  const [open, setOpen] = useState(false);

  const modalRef = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  const focusCloseBtn = () => {
    modalRef.current.focusCloseBtn();
  };
  const focusYesBtn = () => {
    modalRef.current.focusYesBtn();
  };
  const focusNoBtn = () => {
    modalRef.current.focusNoBtn();
  };

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <button onClick={focusCloseBtn}>Focus ModalClose Btn</button>
      <button onClick={focusYesBtn}>Focus ModalYes Btn</button>
      <button onClick={focusNoBtn}>Focus ModalNo close</button>

      <Modal ref={modalRef} isOpen={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
