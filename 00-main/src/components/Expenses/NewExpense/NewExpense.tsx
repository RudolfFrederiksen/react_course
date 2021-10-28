import "./NewExpense.scss";
import { ExpenseForm } from "./ExpenseForm";
import { IExpenseItem } from "../ExpenseItem/ExpenseItem";
import { useState } from "react";

interface INewExpenseProps {
    onNewExpense: (expenseItem: IExpenseItem) => void;
}

export function NewExpense(props: INewExpenseProps) {
    const [isEditing, setIsEditing] = useState(false);

    const toggleFormVisibility = (): void => {
        setIsEditing((prevState) => !prevState);
    };

    const newFormDataHandler = (expenseItem: IExpenseItem) => {
        props.onNewExpense(expenseItem);
    };

    return (
        <div className="new-expense">
            {isEditing ? (
                <ExpenseForm submitHandler={newFormDataHandler} cancelHandler={toggleFormVisibility} />
            ) : (
                <button onClick={toggleFormVisibility}>Add expense</button>
            )}
        </div>
    );
}
