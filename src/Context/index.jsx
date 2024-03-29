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
    const [cartProducts, setCartProducts] = useState([])

    // Open and close cart component
    const [isCartOpen, setIsCartOpen] = useState(false)
    const openCart = () => {
        setIsCartOpen(true)
        setIsProductDetailOpen(false)
    }
    const closeCart = () => {
        setIsCartOpen(false)
    }


    const openProductDetail = () => {
        setIsProductDetailOpen(true)
        setIsCartOpen(false)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }
    
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
            setCartProducts,
            isCartOpen,
            openCart,
            closeCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}