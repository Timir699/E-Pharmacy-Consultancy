import { useContext } from "react"
import { CartContext } from "../context/CartProvider"

const useCartProducts = () => {
    return useContext(CartContext)
}

export default useCartProducts