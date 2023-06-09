import { useState, useRef } from "react";
import Modal from "./Modal";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { usePrevious } from "./hooks/usePrevious"
import { AsyncComponent } from "./AsyncComponent"
import { FetchComponent } from "./FetchComponent"

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
    <>
    <AsyncComponent />
    <FetchComponent />
    <div className="App">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <button onClick={focusCloseBtn}>Focus ModalClose Btn</button>
      <button onClick={focusYesBtn}>Focus ModalYes Btn</button>
      <button onClick={focusNoBtn}>Focus ModalNo close</button>

      <Modal ref={modalRef} isOpen={open} handleClose={handleClose} />
    </div>
    </>
  );
}

export default App;
