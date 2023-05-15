import { createContext } from "react";
import { useState } from "react"


export const CartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: () => {},
})

export const CartStateProvider = ({children}) => {

    const [cartIsOpen, setCartIsOpen] = useState(false);

    const value = {cartIsOpen, setCartIsOpen};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}