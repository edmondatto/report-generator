import React from 'react';
import PropTypes from 'prop-types';

const DistanceCovered = props =>
  <div id="distance-covered">
    We covered a lot of ground, {props.distanceCovered} to be exact.
  </div>;

export default DistanceCovered;

DistanceCovered.propTypes ={
  distanceCovered: PropTypes.number.required,
};