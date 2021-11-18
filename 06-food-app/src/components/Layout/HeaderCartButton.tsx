import classes from "./HeaderCartButton.module.scss";
import CartIcon from "../Cart/CartIcon";

interface IHeaderCartButtonProps {
    onClick: () => void;
}

const HeaderCartButton = (props: IHeaderCartButtonProps) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
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
