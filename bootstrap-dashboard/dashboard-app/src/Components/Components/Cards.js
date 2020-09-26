import React from 'react';

import Row from '../Dashboard/Row';
import PageHeading from '../Dashboard/PageHeading';
import EarningsMonthly from '../Dashboard/EarningsMonthly';
import EarningsAnnual from '../Dashboard/EarningsAnnual';
import Tasks from '../Dashboard/Tasks';
import PendingRequests from '../Dashboard/PendingRequests';
import DefaultCard from './DefaultCard';
import BasicCard from './BasicCard';

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

            {/* Dropdown Card Example */}
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                <div className="dropdown no-arrow">
                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              {/* Card Body */}
              <div className="card-body">
                Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
              </div>
            </div>

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