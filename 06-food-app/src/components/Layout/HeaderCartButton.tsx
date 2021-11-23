import classes from "./HeaderCartButton.module.scss";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

interface IHeaderCartButtonProps {
    onClick: () => void;
}

const HeaderCartButton = (props: IHeaderCartButtonProps) => {
    const cartCtx = useContext(CartContext);

    const itemCount = cartCtx?.items.reduce((acc, item) => acc + item.amount, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>

            <span className={classes.badge}>{itemCount}</span>
        </button>
    );
};

export default HeaderCartButton;
