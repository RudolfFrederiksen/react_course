import CartContext, { ICartContext } from "./cart-context";
import { BasePropsWithChildren } from "../types/propsUtils";
import { ICartItem } from "../components/Cart/Cart";
import { useReducer } from "react";

interface ICartState {
    items: Array<ICartItem>;
    totalAmount: number;
}

const defaultCartState: ICartState = {
    items: [],
    totalAmount: 0,
};

export enum CartActionTypes {
    AddItem = "ADD_ITEM",
    RemoveItem = "REMOVE_ITEM",
}

const cartReducer = (state: ICartState, action: { type: CartActionTypes; payload: any }) => {
    if (action.type === CartActionTypes.AddItem) {
        console.log(action.type);
        const newItem = action.payload.item;
        const existingItemIdx = state.items.findIndex((cartItem) => cartItem.id === newItem.id);

        // update cart items
        let updatedItems;
        if (existingItemIdx > -1) {
            // fixme: consecutive add action increase amount too many times
            updatedItems = state.items.concat();
            updatedItems[existingItemIdx].amount = updatedItems[existingItemIdx].amount + 1;
        } else {
            updatedItems = state.items.concat(newItem);
        }
        // recompute total
        const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price * item.amount, 0);

        return {
            items: updatedItems,
            totalAmount: updatedTotal,
        };
    }
    if (action.type === CartActionTypes.RemoveItem) {
        const idx = state.items.findIndex((item) => item.id === action.payload.id);
        state.items.splice(idx, 1);

        return state;
    }

    return state;
};

const CartProvider = (props: BasePropsWithChildren) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const handleAddItem = (item: ICartItem) => {
        dispatchCartAction({ type: CartActionTypes.AddItem, payload: { item } });
    };
    const handleRemoveItem = (id: string) => {
        dispatchCartAction({ type: CartActionTypes.AddItem, payload: { id } });
    };

    const cartBaseContext: ICartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
    };

    return <CartContext.Provider value={cartBaseContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
