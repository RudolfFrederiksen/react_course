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

// todo: add payload interfaces
const cartReducer = (state: ICartState, action: { type: CartActionTypes; payload: any }) => {
    if (action.type === CartActionTypes.AddItem) {
        const newItem = action.payload.item;
        const existingItemIdx = state.items.findIndex((cartItem) => cartItem.id === newItem.id);

        // recompute total
        const updatedTotal = state.totalAmount + newItem.price * newItem.amount;

        // update cart items
        let updatedItems;
        if (existingItemIdx > -1) {
            updatedItems = state.items.concat();
            const updatedItem = { ...updatedItems[existingItemIdx] };
            updatedItem.amount = updatedItem.amount + newItem.amount;
            updatedItems[existingItemIdx] = updatedItem;
        } else {
            updatedItems = state.items.concat(newItem);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotal,
        };
    }
    if (action.type === CartActionTypes.RemoveItem) {
        const updatedItems = [...state.items];
        const itemIdx = updatedItems.findIndex((item) => item.id === action.payload.id);
        const existingItem = updatedItems[itemIdx];

        // recompute total
        const updatedTotal = state.totalAmount - existingItem.price;

        // update cart items
        if (updatedItems[itemIdx].amount - 1 === 0) {
            updatedItems.splice(itemIdx, 1);
        } else {
            const updatedItem = { ...updatedItems[itemIdx] };
            updatedItem.amount--;
            updatedItems[itemIdx] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotal,
        };
    }

    return defaultCartState;
};

const CartProvider = (props: BasePropsWithChildren) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const handleAddItem = (item: ICartItem) => {
        dispatchCartAction({ type: CartActionTypes.AddItem, payload: { item } });
    };
    const handleRemoveItem = (id: string) => {
        dispatchCartAction({ type: CartActionTypes.RemoveItem, payload: { id } });
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
