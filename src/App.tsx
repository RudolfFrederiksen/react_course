import React from "react";
import "./App.scss";
import ExpenseItem, { IExpenseItem } from "./components/ExpenseItem/ExpenseItem";

function App() {
    const expenses: Array<IExpenseItem> = [
        {
            date: new Date(2021, 10, 5),
            title: "Theater",
            amount: 30,
        },
        {
            date: new Date(2021, 10, 11),
            title: "Rain jacket",
            amount: 75,
        },
    ];

    return (
        <div className="App">
            <h1> hello world</h1>
            {expenses.map((item, idx) => (
                <ExpenseItem date={item.date} amount={item.amount} title={item.title} key={idx}></ExpenseItem>
            ))}
        </div>
    );
}

export default App;
