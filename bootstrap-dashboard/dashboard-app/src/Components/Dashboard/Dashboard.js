import React from 'react';

import PageHeading from './PageHeading';
import EarningsMonthly from './EarningsMonthly';
import EarningsAnnual from './EarningsAnnual';
import Tasks from './Tasks';
import PendingRequests from './PendingRequests';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import Projects from './Projects';
import ColorSystem from './ColorSystem';
import Illustrations from './Illustrations';
import Approach from './Approach';
import Row from './Row';

const Dashboard = (props) => {


    return (
        <div className="container-fluid">
          <PageHeading/>
          
          <Row>
            <EarningsMonthly/>
            <EarningsAnnual/>
            <Tasks/>
            <PendingRequests/>
          </Row>

          <Row>
            <AreaChart/>
            <PieChart/>
          </Row>

          <Row>

            <div className="col-lg-6 mb-4">
              <Projects/>
              <ColorSystem/>
            </div>

            <div className="col-lg-6 mb-4">
              <Illustrations/>
              <Approach/>  
            </div>
          </Row>
      
          {/* Scroll to Top Button */}
          <a className="scroll-to-top rounded" href="#root">
            <i className="fas fa-angle-up"></i>
          </a>

      {/* /.container-fluid */}
      </div>
    );
}

export default Dashboard;