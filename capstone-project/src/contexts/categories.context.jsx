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


    const value = {categoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}