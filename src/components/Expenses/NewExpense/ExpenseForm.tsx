import "./ExpenseForm.scss";
import { useState } from "react";
import { IExpenseItem } from "../ExpenseItem/ExpenseItem";

interface IExpenseFormProps {
    submitHandler: (expenseItem: IExpenseItem) => void;
}

export function ExpenseForm(props: IExpenseFormProps) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };
    const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const data: IExpenseItem = {
            id: new Date().getTime().toString(),
            title,
            amount: Number(amount),
            date: new Date(date),
        };

        props.submitHandler(data);
        resetFields();
    };

    const resetFields = (): void => {
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="controls">
                <div className="control">
                    <label>Title</label>
                    <input type="text" required value={title} onChange={titleHandler} />
                </div>
                <div className="control">
                    <label>Amount</label>
                    <input type="number" required value={amount} onChange={amountHandler} />
                </div>
                <div className="control">
                    <label>Date</label>
                    <input type="date" required value={date} min="2019-01-01" max="2022-12-31" onChange={dateHandler} />
                </div>
            </div>
            <div className="actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}
