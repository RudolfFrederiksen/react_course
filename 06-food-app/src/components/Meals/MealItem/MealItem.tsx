import { IMeal } from "../../../assets/dummy-meals";
import classes from "./MealItem.module.scss";
import MealItemsForm from "./MealItemsForm";

interface IMealItemsProps {
    meal: IMeal;
}

const MealItem = (props: IMealItemsProps) => {
    const price = `$${props.meal.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemsForm />
            </div>
        </li>
    );
};

export default MealItem;
