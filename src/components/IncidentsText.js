import React from 'react';
import PropTypes from 'prop-types';

const IncidentsText = props =>
  <p className="body-text">
    <span className="bold-text">Incidents </span> are urgent events
    in which a member of the {props.clientTeamName}
    <br/>Security Leadership team was immediately notified.
  </p>;

export default IncidentsText;

IncidentsText.propTypes = {
  clientTeamName: PropTypes.string.required,
};