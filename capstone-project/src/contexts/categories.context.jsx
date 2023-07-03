import { createContext } from "react";
import { useState, useEffect } from "react";
import { getCategoriesandDocuments } from "../utils/firebase/firebase.utils.js";
import { addCollectionAndDocs } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
    "categoriesMap": {},
});

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocs('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {

       const getCategoriesMap =  async () => {
            const categoryMap = await getCategoriesandDocuments();
            console.log(categoryMap)
            setCategoriesMap(categoryMap);
       }

       getCategoriesMap();
    }, []);


    // we make value an object because our context is passed an object with "categoriesMap": []. In order to overwrite this, we need to pass it a new object with a "categoriesMap": [array] key-value pair but with the array containing the shop data instead of an empty array. 
    const value = {categoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}