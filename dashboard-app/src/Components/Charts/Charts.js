import React from 'react';

import AreaChart from './AreaChart';
import BarChart from './BarChart';
import DonutChart from './DonutChart';

const Charts = (props) => {

    return (            
      <div className="container-fluid">
      {/* Begin Page Content */}

        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Charts</h1>
        <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the <a target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js documentation</a>.</p>

        {/* Content Row */}
        <div className="row">

          <div className="col-xl-8 col-lg-7">

            <AreaChart/>
            <BarChart/>
         
          </div>

          {/* Donut Chart */}
          <div className="col-xl-4 col-lg-5">
            <DonutChart/>
          </div>
        </div>
      {/* /.container-fluid */}
      </div>
    );
}

export default Charts;