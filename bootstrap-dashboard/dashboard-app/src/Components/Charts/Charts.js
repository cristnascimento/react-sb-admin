import React, {useRef, useEffect} from 'react';
import Chart from 'chart.js';

import fillPie2 from './chart-pie-demo';

import AreaChart from './AreaChart';
import BarChart from './BarChart';

const Charts = (props) => {

    const chartContainer = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            fillPie2(chartContainer);
          //const newChartInstance = new Chart(chartContainer.current, chartConfig);
          //setChartInstance(newChartInstance);
        }
      }, [chartContainer]);

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
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
              </div>
              {/* Card Body */}
              <div className="card-body">
                <div className="chart-pie pt-4">
                  <canvas id="myPieChart" ref={chartContainer}></canvas>
                </div>
                <hr/>
                Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js</code> file.
              </div>
            </div>
          </div>
        </div>
      {/* /.container-fluid */}
      </div>
    );
}

export default Charts;