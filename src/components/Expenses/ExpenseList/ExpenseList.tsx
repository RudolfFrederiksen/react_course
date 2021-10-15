import { ExpenseItem, IExpenseItem } from "../ExpenseItem/ExpenseItem";
import React, { useState } from "react";
import "./ExpenseList.scss";
import { Card } from "../../shared/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

interface IExpenseListProps {
    list: Array<IExpenseItem>;
}

export function ExpenseList(props: IExpenseListProps) {
    const [yearFilter, setYearFilter] = useState("");

    const yearFilterHandler = (year: string) => {
        setYearFilter(year);
    };

    return (
        <Card className="expenses">
            <ExpenseFilter defaultYear={yearFilter} onYearUpdate={yearFilterHandler} />
            {props.list
                .filter((item) => (yearFilter ? item.date.getFullYear() === Number(yearFilter) : true))
                .map((item, idx) => (
                    <ExpenseItem id={item.id} date={item.date} amount={item.amount} title={item.title} key={idx} />
                ))}
        </Card>
    );
}
