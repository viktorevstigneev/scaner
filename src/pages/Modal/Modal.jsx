import React from "react";

import "./style.css";

const Modal = (props) => (
  <div
    className="modal__window"
    onClick={props.onOverlayClick}
    style={props.style}
  >
    <div className="modal__container">
      <button
        className="modal__close-button"
        onClick={props.onCloseButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          height="15"
          width="15px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512     512,452.922 315.076,256   " />
            </g>
          </g>
        </svg>
      </button>
      <div className="modal__header">
        <h2 className="modal__title">{props.title}</h2>
        {props.children}
      </div>
    </div>
  </div>
);

export default Modal;
