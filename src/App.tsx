import React, { useState } from "react";
import "./App.scss";
import { IExpenseItem } from "./components/Expenses/ExpenseItem/ExpenseItem";
import { ExpenseList } from "./components/Expenses/ExpenseList/ExpenseList";
import { NewExpense } from "./components/Expenses/NewExpense/NewExpense";

function App() {
    const defaultExpenses: Array<IExpenseItem> = [
        {
            id: "1",
            date: new Date(2021, 9, 5),
            title: "Theater",
            amount: 30,
        },
        {
            id: "2",
            date: new Date(2021, 9, 11),
            title: "Rain jacket",
            amount: 75,
        },
        {
            id: "3",
            date: new Date(2021, 9, 10),
            title: "Groceries",
            amount: 50,
        },
    ];
    const [expenses, setExpenses] = useState(defaultExpenses);

    const addExpense = (expenseItem: IExpenseItem) => {
        setExpenses((prev) => {
            return prev.concat(expenseItem);
        });
    };

    return (
        <div className="App">
            <NewExpense onNewExpense={addExpense} />
            <ExpenseList list={expenses} />
        </div>
    );
}

export default App;
