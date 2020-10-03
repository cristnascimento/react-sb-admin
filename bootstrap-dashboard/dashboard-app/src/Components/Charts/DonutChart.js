import React, {useRef, useEffect} from 'react';
import Chart from 'chart.js';

import fillPie2 from './chart-pie-demo';

const DonutChart = (props) => {
    
    const chartContainer = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            fillPie2(chartContainer);
          //const newChartInstance = new Chart(chartContainer.current, chartConfig);
          //setChartInstance(newChartInstance);
        }
      }, [chartContainer]);

    return (
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
    );
}

export default DonutChart;