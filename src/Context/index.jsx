import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Shopping cart counter state
    const [count, setCount] = useState(0)

    // Product detail component open or closed
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    // Current product detail state
    const [ProductDetail, setProductDetail] = useState("")
    
    // Cart products state
    const [cartProducts, setCartProducts] = useState([{}])

    const openProductDetail = () => {
    setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
        }
    console.log(count)
    console.log(isProductDetailOpen)
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            setProductDetail,
            ProductDetail,
            cartProducts,
            setCartProducts
        }}>
        { children }
        </ShoppingCartContext.Provider>
        )
}