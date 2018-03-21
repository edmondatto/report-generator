import React from 'react';
import * as report from '../data/data';

const reportData = report.report_data;

const ListItems = props =>
  <ul>
    <li>{props.recentItem}</li>
  </ul>;

const listItems = reportData.recentUpdates.map((item, index) => (
  <ListItems
    recentItem={item}
    key={index}
  />
));

const RecentUpdates = () =>
  <div className="page-3-text">
    {listItems}
  </div>;

export default RecentUpdates;