import "./ExpenseDate.scss";

interface IExpenseDateProps {
    date: Date;
}

export function ExpenseDate(props: IExpenseDateProps) {
    const year = props.date.getFullYear(),
        month = props.date.toLocaleDateString("fr-fr", { month: "long" }),
        day = props.date.toLocaleDateString("fr-fr", { day: "2-digit" });

    return (
        <div className="expense-date">
            <div className="year">{year}</div>
            <div className="month">{month}</div>
            <div className="day">{day}</div>
        </div>
    );
}
