import { createContext } from "react";
import SHOP_DATA from '../shop-data.json';
import { useState } from "react";

export const ProductsContext = createContext({
    "products": [],
});

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(SHOP_DATA);


    // we make value an object because our context is passed an object with "products": []. In order to overwrite this, we need to pass it a new object with a "products": [array] key-value pair but with the array containing the shop data instead of an empty array. 
    const value = {products};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}