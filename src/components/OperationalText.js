import React from 'react';
import PropTypes from 'prop-types';

const OperationalText =(props) =>
  <div id="operational-text">
    Authenticated {props.clientTeamName} personnel
  </div>;

export default OperationalText;

OperationalText.propTypes ={
  clientTeamName: PropTypes.string.required
};