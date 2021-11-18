import classes from "./AvailableMeals.module.scss";
import { DUMMY_MEALS } from "../../assets/dummy-meals";
import { Card } from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <MealItem meal={meal} key={meal.id} />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
