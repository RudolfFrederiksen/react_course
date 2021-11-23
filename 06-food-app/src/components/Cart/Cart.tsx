import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

export interface ICartItem {
    id: string;
    name: string;
    amount: number;
    price: number;
}

interface ICartProps {
    onClose: () => void;
}

const Cart = (props: ICartProps) => {
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx?.items.map((item) => <li key={item.id}>{item.name}</li>);

    return (
        <Modal onBackdropClick={props.onClose}>
            <ul className={classes.cartItems}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx?.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={props.onClose}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
