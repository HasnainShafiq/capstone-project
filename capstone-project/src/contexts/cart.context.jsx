import { createContext } from "react";
import { useState } from "react"

const addCartItem = (cartItems, productToAdd) => {

    // check if item is already in cart using .find methd
    const existingItem = cartItems.find((item) => item.id === productToAdd.id);

    // if it is, find the matching item id and increase its quantity. Otherwise, return the item as it is. 
    if (existingItem) {
        return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
    }
   
    // if it isn't, return an array with all existing items and the new item with a quantity of 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

export const CartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
})

export const CartStateProvider = ({children}) => {

    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // update the cart state using the addCartItem function. 
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    };

    const value = {cartIsOpen, setCartIsOpen, addItemToCart, cartItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}