import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  props.buttons.map((b) => (
    <button
      className="modal-option"
      onClick={props[b.action]}
    >
      {b.text}
    </button>
  ))
);
