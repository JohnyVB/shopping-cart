import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart);
        }

        return setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]));
    }

    const cleanCart = () => {
        setCart([]);
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id));
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cleanCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
