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

            {/* Content Column */}
            <div className="col-lg-6 mb-4">
              <Projects/>
              <ColorSystem/>
            </div>

            <div className="col-lg-6 mb-4">

              {/* Illustrations */}
              <Illustrations/>

              {/* Approach */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                </div>
                <div className="card-body">
                  <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                  <p className="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                </div>
              </div>

            </div>
          </div>
      
          {/* Scroll to Top Button */}
          <a className="scroll-to-top rounded" href="#root">
            <i className="fas fa-angle-up"></i>
          </a>
          <script src="vendor/chart.js/Chart.min.js"></script>
    
          {/* Page level custom scripts */}
          <script src="js/demo/chart-area-demo.js"></script>
          <script src="js/demo/chart-pie-demo.js"></script>
      {/* /.container-fluid */}
      </div>
    );
}

export default Dashboard;