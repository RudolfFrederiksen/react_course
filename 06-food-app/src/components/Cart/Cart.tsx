import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

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

    // todo: handle addition and removal
    const cartItemAddHandler = () => {};
    const cartItemRemoveHandler = () => {};

    const cartItems = cartCtx?.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item.id)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    ));
    const hasItems = cartItems ? cartItems.length > 0 : false;
    const total = `$${cartCtx?.totalAmount.toFixed(2)}`;

    return (
        <Modal onBackdropClick={props.onClose}>
            <ul className={classes["cart-items"]}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
