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

const Dashboard = (props) => {


    return (
        <div className="container-fluid">
        {/* Begin Page Content */}

          {/* Page Heading */}
          <PageHeading/>

          {/* Content Row */}
          <div className="row">
            <EarningsMonthly/>
            <EarningsAnnual/>
            <Tasks/>
            <PendingRequests/>
          </div>

          {/* Content Row */}
          <div className="row">
            <AreaChart/>
            <PieChart/>
          </div>

          {/* Content Row */}
          <div className="row">

            <div className="col-lg-6 mb-4">
              <Projects/>
              <ColorSystem/>
            </div>

            <div className="col-lg-6 mb-4">
              <Illustrations/>
              <Approach/>  
            </div>
          </div>
      
          {/* Scroll to Top Button */}
          <a className="scroll-to-top rounded" href="#root">
            <i className="fas fa-angle-up"></i>
          </a>

      {/* /.container-fluid */}
      </div>
    );
}

export default Dashboard;