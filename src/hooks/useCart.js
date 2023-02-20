import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const useCart = () => {
    const cartContext = useContext(CartContext);

    if (cartContext === undefined) {
        throw new Error('No provider');
    }
    return cartContext
}