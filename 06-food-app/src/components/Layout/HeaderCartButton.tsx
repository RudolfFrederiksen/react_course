import classes from "./HeaderCartButton.module.scss";
import CartIcon from "../Cart/CartIcon";

interface IHeaderCartButtonProps {}

const HeaderCartButton = (props: IHeaderCartButtonProps) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>

            {/* todo: add cart counter*/}
            <span className={classes.badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;
