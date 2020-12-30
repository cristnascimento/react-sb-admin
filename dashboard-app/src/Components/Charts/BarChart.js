import React, {useRef, useEffect} from 'react';
import Chart from 'chart.js';

import fillBar from './chart-bar-demo';

const BarChart = (props) => {
    const chartBar = useRef(null);

    useEffect(() => {
        if (chartBar && chartBar.current) {
            fillBar(chartBar);
        //setChartInstance(newChartInstance);
        }
    }, [chartBar]);

    return (
        <div className="card shadow mb-4">
        {/* Bar Chart */}
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
    );
}

export default BarChart;