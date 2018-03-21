import React, {Component} from 'react';
import * as report from '../data/data';

const reportData = report.report_data;


class OperationalHoursGraph extends Component {

  styleGenerator = (heightValue) => {
    return {
      height: heightValue * 11,
      width: '52',
      backgroundColor: '#BFF4E8',
    };
  };

  render(){

    const GraphBars = props =>
      <div className="col-sm">
        <div style={props.barStyle}/>
      </div>;

    const graphBars = reportData.dailyOperationalHours.map((height, index) =>
      <GraphBars
        barStyle={this.styleGenerator(height)}
        key={index}
        numberAuthenticatedDaily={height}
      />
    );

    return(
      <div className="container-fluid pl-0 pr-0" >
        <div className="row align-items-end no-gutters">
          {graphBars}
        </div>
      </div>
    );
  }
}

export default OperationalHoursGraph;
