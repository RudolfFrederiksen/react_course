import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen((state) => !state);
    };

    return (
        <>
            {cartOpen && <Cart onClose={toggleCart} />}
            <Header onShowCart={toggleCart}></Header>
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
