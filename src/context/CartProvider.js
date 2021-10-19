import { createContext, useState } from "react";

export const CartContext = createContext()


// Auth CartProvider context
const CartProvider = ({ children }) => {
    const [allCartProducts, setAllCartProducts] = useState([])
    const [cartCounter, setCartCounter] = useState(0)

    return (
        <CartContext.Provider
            value={{
                allCartProducts,
                setAllCartProducts,
                cartCounter,
                setCartCounter
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider