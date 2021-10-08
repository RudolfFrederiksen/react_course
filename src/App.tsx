import React from "react";
import "./App.scss";
import { IExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";

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
    ];

    return (
        <div className="App">
            <ExpenseList list={expenses} />
        </div>
    );
}

export default App;
