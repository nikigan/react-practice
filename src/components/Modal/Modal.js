/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import "./Modal.scss";

const Modal = ({ opened, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    const onEscapeClose = (e) => {
      if (e.key !== "Escape") return;
      onClose();
    };

    window.addEventListener("keydown", onEscapeClose, false);

    return () => {
      window.removeEventListener("keydown", onEscapeClose, false);
    };
  }, [onClose]);

  return createPortal(
    <div className={classNames("modal", { show: opened })}>
      <div
        className="modal-background"
        onMouseDown={onClose}
        role="presentation"
      />
      <div className="modal-content">{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
