import React, {Component} from 'react';
import PropTypes from 'prop-types';


class PersonnelAuthenticated extends Component{

  render(){
    const array = this.props.numberAuthenticatedDaily;
    const numberOfAuthenticatedPersonnel = array.reduce((total, acc) => total + acc);

    return(
      <div className="page-3-text">
        We detected {numberOfAuthenticatedPersonnel} people in the building after hours this week.
        We with the help of the {this.props.clientTeamName} Security Leadership team, we successfully authenticated all of them.
      </div>
    );
  }
}

export default PersonnelAuthenticated;

PersonnelAuthenticated.propTypes = {
  numberAuthenticatedDaily: PropTypes.array.required,
  clientTeamName: PropTypes.string.required,
};