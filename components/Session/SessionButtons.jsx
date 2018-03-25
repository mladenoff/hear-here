import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  props.sessionButtons.map((button) => (
  <Link className="modal-option" to={button.action} >{button.text}</Link>
  ))
);
