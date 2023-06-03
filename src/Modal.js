import React, { useRef, forwardRef, useImperativeHandle } from "react";
import "./Modal.css";

const Modal = ({ isOpen, handleClose }, ref) => {
  const btnCloseRef = useRef();
  const btnYesRef = useRef();
  const btnNoRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focusCloseBtn: () => {
        btnCloseRef.current.focus();
      },
      focusYesBtn: () => {
        btnYesRef.current.focus();
      },
      focusNoBtn: () => {
        btnNoRef.current.focus();
      },
    };
  });

  if (!isOpen) return null;

  return (
    <div>
      <h1>Confirmation Modal</h1>
      <button
        id="btnClose"
        className="modal-btn"
        ref={btnCloseRef}
        onClick={handleClose}
      >
        Close
      </button>
      <h6>Are you sure you want to confirm this?</h6>
      <button id="btnYes" className="modal-btn" ref={btnYesRef}>
        Yes
      </button>
      <button id="btnNo" className="modal-btn" ref={btnNoRef}>
        No
      </button>
    </div>
  );
};

export default forwardRef(Modal);
