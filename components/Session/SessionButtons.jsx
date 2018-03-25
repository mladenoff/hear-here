import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  props.sessionButtons.map((button) => (
  <Link to={button.action} >{button.text}</Link>
  ))
);
