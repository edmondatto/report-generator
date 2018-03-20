import React from 'react';

const PageOneFooterText = props =>
  <p id='page-one-footer'>
    We <span className="bold-text">authenticated {props.numberOfAuthenticated} people</span> in your space this week and
    <br/><span className="bold-text"> completed {props.numberOfPatrols} patrols</span>.
  </p>;

export default PageOneFooterText;