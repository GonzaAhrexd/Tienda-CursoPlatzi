import { createContext, useState, useEffect } from "react";

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

    //Total price of the cart
    const [total, setTotal] = useState(0)

    const calculateTotal = () => {
        let total = 0;
        if(!cartProducts.length){
            setTotal(0)
            return 0;
        }else{
            cartProducts.map(product => {
                total = total + (product.price * product.quantity)
            })
            setTotal(total)
            }

    }
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
    useEffect(() => {
        calculateTotal();
       }, [cartProducts, count]); 
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
            closeCart,
            total,
            calculateTotal
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}