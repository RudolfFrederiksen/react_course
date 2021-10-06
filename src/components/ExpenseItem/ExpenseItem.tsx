import "./ExpenseItem.scss";

export interface IExpenseItem {
    date: Date;
    title: string;
    amount: number;
}

function ExpenseItem(props: IExpenseItem) {
    const year = props.date.getFullYear(),
        month = props.date.toLocaleDateString("fr-fr", { month: "long" }),
        day = props.date.toLocaleDateString("fr-fr", { day: "2-digit" });

    return (
        <div className="expense-item">
            <div>
                <div>{year}</div>
                <div>{month}</div>
                <div>{day}</div>
            </div>
            <div className="description">
                <h2>{props.title}</h2>
                <div className="price">{props.amount}€</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
