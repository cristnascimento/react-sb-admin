import React from 'react';

import Row from '../Dashboard/Row';
import PageHeading from '../Dashboard/PageHeading';
import EarningsMonthly from '../Dashboard/EarningsMonthly';
import EarningsAnnual from '../Dashboard/EarningsAnnual';
import Tasks from '../Dashboard/Tasks';
import PendingRequests from '../Dashboard/PendingRequests';
import DefaultCard from './DefaultCard';
import BasicCard from './BasicCard';
import DropdownCard from './DropdownCard';

const Cards = (props) => {
    return (
      <div className="container-fluid">
          <PageHeading/>
          
          <Row>
            <EarningsMonthly/>
            <EarningsAnnual/>
            <Tasks/>
            <PendingRequests/>
          </Row>
      
        <div className="row">

          <div className="col-lg-6">
            <DefaultCard/>
            <BasicCard/>
          </div>

          <div className="col-lg-6">

            <DropdownCard/>

            {/* Collapsable Card Example */}
            <div className="card shadow mb-4">
              {/* Card Header - Accordion */}
              <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
              </a>
              {/* Card Content - Collapse */}
              <div className="collapse show" id="collapseCardExample">
                <div className="card-body">
                  This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!
                </div>
              </div>
            </div>

          </div>

        </div>
      {/* /.container-fluid */}
      </div>
              
    );
}

export default Cards;