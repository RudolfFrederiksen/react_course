import "./ExpenseItem.scss";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import { Card } from "../../shared/Card/Card";
import { useState } from "react";

export interface IExpenseItem {
    date: Date;
    title: string;
    amount: number;
}

export function ExpenseItem(props: IExpenseItem) {
    const [title, setTitle] = useState(props.title);

    const buttonClickHandler = () => {
        setTitle("updated !");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="description">
                <h2>{title}</h2>
                <div className="price">{props.amount}€</div>
            </div>

            <button onClick={buttonClickHandler}>Change title</button>
        </Card>
    );
}
