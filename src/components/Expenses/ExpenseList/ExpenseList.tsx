import { ExpenseItem, IExpenseItem } from "../ExpenseItem/ExpenseItem";
import React, { useState } from "react";
import "./ExpenseList.scss";
import { Card } from "../../shared/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ListRenderer from "../../shared/List/ListRendered";

interface IExpenseListProps {
    list: Array<IExpenseItem>;
}

export function ExpenseList(props: IExpenseListProps) {
    const [yearFilter, setYearFilter] = useState("");

    const yearFilterHandler = (year: string) => {
        setYearFilter(year);
    };

    const filteredList = props.list.filter((item) =>
        yearFilter ? item.date.getFullYear() === Number(yearFilter) : true
    );
    return (
        <Card className="expenses">
            <ExpenseFilter defaultYear={yearFilter} onYearUpdate={yearFilterHandler} />
            <ListRenderer list={filteredList}>
                {filteredList.map((item, idx) => (
                    <ExpenseItem id={item.id} date={item.date} amount={item.amount} title={item.title} key={idx} />
                ))}
            </ListRenderer>
        </Card>
    );
}
