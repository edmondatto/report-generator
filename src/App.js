import React, { Component } from 'react';
import './styles/App.css';
import PageOne from './pagedraw/cover'
import * as rep from './data/data';


let data = JSON.stringify(rep);
console.log(rep.report_data.customerTeamName);
export const reportData = rep.report_data;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageOne
          numberOfAuthenticated={reportData.numberOfAuthenticated}
          numberOfPatrols={reportData.numberOfPatrols}
          timePeriod={reportData.date}
        />
      </React.Fragment>
    );
  }
}

export default App;
