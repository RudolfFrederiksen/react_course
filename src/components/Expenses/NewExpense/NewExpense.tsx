import "./NewExpense.scss";
import { ExpenseForm } from "./ExpenseForm";
import { IExpenseItem } from "../ExpenseItem/ExpenseItem";

interface INewExpenseProps {
    onNewExpense: (expenseItem: IExpenseItem) => void;
}

export function NewExpense(props: INewExpenseProps) {
    const newFormDataHandler = (expenseItem: IExpenseItem) => {
        props.onNewExpense(expenseItem);
    };

    return (
        <div className="new-expense">
            <ExpenseForm submitHandler={newFormDataHandler} />
        </div>
    );
}
