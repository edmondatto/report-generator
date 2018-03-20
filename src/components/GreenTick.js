import React from 'react';
import PropTypes from 'prop-types';
import Tick from '../img/green tick.png';

const GreenTick = (props) =>
  <img src={Tick} alt="A green checkmark" width={props.big ? 103 : 20} height={props.big ? 103 : 20}/>;

export default GreenTick;

GreenTick.propTypes = {
  big: PropTypes.bool.required,
};