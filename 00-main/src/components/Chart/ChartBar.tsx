import "./ChartBar.scss";

interface IChartBarProps {
    value: number;
    max: number;
    label: string;
}

const ChartBar = (props: IChartBarProps) => {
    let barHeight = "0%";
    if (props.max > 0) {
        barHeight = Math.round((props.value / props.max) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="inner">
                <div className="fill" style={{ height: barHeight }}></div>
            </div>
            <div className="label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
