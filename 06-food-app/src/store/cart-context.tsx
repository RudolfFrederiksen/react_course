import React from "react";
import { ICartItem } from "../components/Cart/Cart";

export interface ICartContext {
    items: Array<ICartItem>;
    totalAmount: number;
    addItem: (cartItem: ICartItem) => void;
    removeItem: (id: string) => void;
}

const CartContext = React.createContext<ICartContext | null>(null);

export default CartContext;
