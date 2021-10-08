import React from "react";
import "./App.scss";
import { IExpenseItem } from "./components/Expenses/ExpenseItem/ExpenseItem";
import { ExpenseList } from "./components/Expenses/ExpenseList/ExpenseList";
import { NewExpense } from "./components/Expenses/NewExpense/NewExpense";

function App() {
    const expenses: Array<IExpenseItem> = [
        {
            date: new Date(2021, 9, 5),
            title: "Theater",
            amount: 30,
        },
        {
            date: new Date(2021, 9, 11),
            title: "Rain jacket",
            amount: 75,
        },
        {
            date: new Date(2021, 9, 10),
            title: "Groceries",
            amount: 50,
        },
    ];

    return (
        <div className="App">
            <NewExpense />
            <ExpenseList list={expenses} />
        </div>
    );
}

export default App;
