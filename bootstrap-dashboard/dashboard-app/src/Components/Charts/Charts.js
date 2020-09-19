import React, {useRef, useEffect} from 'react';
import Chart from 'chart.js';

import fillArea2 from './chart-area-demo';
import fillPie2 from './chart-pie-demo';
import fillBar from './chart-bar-demo';

const Charts = (props) => {

    const chartContainer = useRef(null);
    const chartContainerArea = useRef(null);
    const chartBar = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            fillPie2(chartContainer);
          //const newChartInstance = new Chart(chartContainer.current, chartConfig);
          //setChartInstance(newChartInstance);
        }
      }, [chartContainer]);

    useEffect(() => {
        if (chartContainerArea && chartContainerArea.current) {
            fillArea2(chartContainerArea);
        //setChartInstance(newChartInstance);
        }
    }, [chartContainerArea]);

    useEffect(() => {
        if (chartBar && chartBar.current) {
            fillBar(chartBar);
        //setChartInstance(newChartInstance);
        }
    }, [chartBar]);

    return (            
      <div className="container-fluid">
      {/* Begin Page Content */}

        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Charts</h1>
        <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the <a target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js documentation</a>.</p>

        {/* Content Row */}
        <div className="row">

          <div className="col-xl-8 col-lg-7">

            {/* Area Chart */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="myAreaChart" ref={chartContainerArea}></canvas>
                </div>
                <hr/>
                Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file.
              </div>
            </div>

            {/* Bar Chart */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
              </div>
              <div className="card-body">
                <div className="chart-bar">
                  <canvas id="myBarChart" ref={chartBar}></canvas>
                </div>
                <hr/>
                Styling for the bar chart can be found in the <code>/js/demo/chart-bar-demo.js</code> file.
              </div>
            </div>

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