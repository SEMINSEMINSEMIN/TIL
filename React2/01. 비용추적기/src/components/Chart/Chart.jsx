import React from "react";
import ChartBar from "./ChartBar";
import "./chart.css";

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map((e) => e.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}
