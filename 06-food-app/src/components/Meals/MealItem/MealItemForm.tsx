import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.scss";
import React, { useContext, useRef } from "react";
import CartContext from "../../../store/cart-context";
import { IMeal } from "../../../assets/dummy-meals";

interface IMealItemFormProps {
    mealId: string;
    meal: IMeal;
}

const MealItemForm = (props: IMealItemFormProps) => {
    const cartCtx = useContext(CartContext);
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        cartCtx?.addItem({
            id: props.meal.id,
            price: props.meal.price,
            name: props.meal.name,
            amount: Number(inputRef.current.value),
        });
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
        </form>
    );
};

export default MealItemForm;
