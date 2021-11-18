import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.scss";

interface IMealItemFormProps {
    mealId: string;
}

const MealItemForm = (props: IMealItemFormProps) => {
    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input={{
                    id: "amount_" + props.mealId,
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1,
                }}
            />
            <button>Add</button>
        </form>
    );
};

export default MealItemForm;
