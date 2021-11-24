import { IMeal } from "../../../assets/dummy-meals";
import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

interface IMealItemsProps {
    meal: IMeal;
}

const MealItem = (props: IMealItemsProps) => {
    const price = `$${props.meal.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const onAddMeal = (amount: number) => {
        cartCtx?.addItem({
            id: props.meal.id,
            price: props.meal.price,
            name: props.meal.name,
            amount,
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm mealId={props.meal.id} onSubmit={onAddMeal} />
            </div>
        </li>
    );
};

export default MealItem;
