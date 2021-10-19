import { createContext, useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"


export const productsContext = createContext()


// Auth ProductProvider context
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const load = useAuth()
    const { setIsLoading } = load

    useEffect(() => {
        setIsLoading(false)
        fetch('/ProductsData.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductProvider