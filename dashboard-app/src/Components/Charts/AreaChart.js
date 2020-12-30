import React, {useRef, useEffect} from 'react';
import Chart from 'chart.js';

import fillArea2 from './chart-area-demo';

const AreaChart = (props) => {
    const chartContainerArea = useRef(null);

    useEffect(() => {
        if (chartContainerArea && chartContainerArea.current) {
            fillArea2(chartContainerArea);
        //setChartInstance(newChartInstance);
        }
    }, [chartContainerArea]);

    return (
        <div className="card shadow mb-4">
        {/* Area Chart */}
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
    );
}

export default AreaChart;