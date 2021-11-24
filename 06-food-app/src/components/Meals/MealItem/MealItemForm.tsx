import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.scss";
import React, { useRef, useState } from "react";
interface IMealItemFormProps {
    mealId: string;
    onSubmit: (amount: number) => void;
}

const MealItemForm = (props: IMealItemFormProps) => {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const amount = inputRef.current.value;
        const amountNumber: number = +amount;
        if (amount.trim().length === 0 || amountNumber < 0 || amountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onSubmit(amountNumber);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={inputRef}
                label="Amount"
                input={{
                    id: "amount_" + props.mealId,
                    name: "amount",
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1,
                }}
            />
            <button type="submit">Add</button>

            {!amountIsValid && <p>Enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;
