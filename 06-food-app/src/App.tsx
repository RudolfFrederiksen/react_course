import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen((state) => !state);
    };

    return (
        <CartProvider>
            {cartOpen && <Cart onClose={toggleCart} />}
            <Header onShowCart={toggleCart}></Header>
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
