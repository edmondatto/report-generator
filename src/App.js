import React, { Component } from 'react';
import './styles/App.css';
import PageOne from './pagedraw/cover'
import PageTwo from './pagedraw/operational-hours'
import PageThree from './pagedraw/activity-summary'
import PageFour from './pagedraw/feature-roadmap'
import * as report from './data/data';


export const reportData = report.report_data;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageOne
          numberOfAuthenticated={reportData.numberOfAuthenticated}
          numberOfPatrols={reportData.numberOfPatrols}
          timePeriod={reportData.date}
        />

        <PageTwo />

        <PageThree />

        <PageFour />

      </React.Fragment>
    );
  }
}

export default App;
