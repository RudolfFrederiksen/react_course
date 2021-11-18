import classes from "./AvailableMeals.module.scss";
import { DUMMY_MEALS } from "../../assets/dummy-meals";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>);

    return (
        <section className={classes.meals}>
            <ul>{mealsList}</ul>
        </section>
    );
};

export default AvailableMeals;
