import React from 'react';
import * as report from '../data/data';

const reportData = report.report_data;

const ListItems = props =>
  <ul>
    <li>{props.featureItem}</li>
  </ul>;

const listItems = reportData.featureUpdates.map((item, index) => (
  <ListItems
    featureItem={item}
    key={index}
  />
));

const FutureUpdates = () =>
  <div className="page-3-text">
    {listItems}
  </div>;

export default FutureUpdates;