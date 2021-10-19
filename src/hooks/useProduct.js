import { useContext } from "react"
import { productsContext } from "../context/ProductProvider"

const useProducts = () => {
    return useContext(productsContext)
}

export default useProducts