import React, {Component} from 'react';
import * as report from '../data/data';
import GraphAvatar from "./GraphAvatar";

const reportData = report.report_data;


class AuthenticationGraph extends Component {

  styleGenerator = (heightValue) => {
    return {
      height: heightValue * 15,
      width: '60',
      backgroundColor: '#BFF4E8',
    };
  };

  render(){

    const GraphBars = props =>
      <div className="col-sm pr-1 pl-1">
        <GraphAvatar numberAuthenticatedDaily={props.numberAuthenticatedDaily}/>
        <div style={props.barStyle}/>
      </div>;

    const graphBars = reportData.numberAuthenticatedDaily.map((height, index) =>
      <GraphBars
        barStyle={this.styleGenerator(height)}
        key={index}
        numberAuthenticatedDaily={height}
      />
    );

    return(
      <div className="container" >
        <div className="row align-items-end">
          {graphBars}
        </div>
      </div>
    );
  }
}

export default AuthenticationGraph;