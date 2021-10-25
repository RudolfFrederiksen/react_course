import Chart, { DataPoint } from "../../Chart/Chart";
import { IExpenseItem } from "../ExpenseItem/ExpenseItem";

interface IExpenseChartProps {
    expenseItems: Array<IExpenseItem>;
}

const ExpenseChart = (props: IExpenseChartProps) => {
    const chartDataPoints: Array<DataPoint> = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    for (const expense of props.expenseItems) {
        const idx = expense.date.getMonth();
        chartDataPoints[idx].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
