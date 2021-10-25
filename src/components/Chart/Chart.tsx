import "./Chart.scss";
import ChartBar from "./ChartBar";

export interface DataPoint {
    value: number;
    label: string;
}

interface IChartProps {
    dataPoints: Array<DataPoint>;
}

const Chart = (props: IChartProps) => {
    let totalMax = Math.max(...props.dataPoints.map((dataPoint) => dataPoint.value));

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar key={dataPoint.label} value={dataPoint.value} max={totalMax} label={dataPoint.label} />
            ))}
        </div>
    );
};

export default Chart;
