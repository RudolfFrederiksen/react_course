import { ExpenseItem, IExpenseItem } from "../ExpenseItem/ExpenseItem";
import React from "react";
import "./ExpenseList.scss";
import { Card } from "../../shared/Card/Card";

interface IExpenseListProps {
    list: Array<IExpenseItem>;
}

export function ExpenseList(props: IExpenseListProps) {
    return (
        <Card className="expenses">
            {props.list.map((item, idx) => (
                <ExpenseItem id={item.id} date={item.date} amount={item.amount} title={item.title} key={idx} />
            ))}
        </Card>
    );
}
