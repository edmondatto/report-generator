import React from 'react'
import yelpFloorPlan from '../img/yelp-floor-plan.png';

const Patrols = () =>
  <div className="page-3-text container">
    <div className="row">
      <div className="col-sm-6">
        <div>
          <p>
            Currently, we have two patrol routes which check the entrances and monitors the office and lobby of 55H, floors 7 and 9.
          </p>
          <p>
            At right: your primary entrance and egress points. Note that the rear fire escape is regularly checked as well.
          </p>
        </div>
      </div>
      <div className="col-sm-6">
        <img
          src={yelpFloorPlan}
          alt="Yelp Floor Plan"
          width={221}
          height={286}
        />
      <div/>
    </div>
    </div>
  </div>;

export default Patrols;