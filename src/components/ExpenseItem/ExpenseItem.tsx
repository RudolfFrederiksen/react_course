import "./ExpenseItem.scss";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import { Card } from "../shared/Card/Card";

export interface IExpenseItem {
    date: Date;
    title: string;
    amount: number;
}

export function ExpenseItem(props: IExpenseItem) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="description">
                <h2>{props.title}</h2>
                <div className="price">{props.amount}€</div>
            </div>
        </Card>
    );
}
