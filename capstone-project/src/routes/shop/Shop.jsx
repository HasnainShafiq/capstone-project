import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/categories-preview";
import { Category } from "../category/Category";
import ProductPage from "../product-page/ProductPage";

export const Shop = () => {


  return (
   <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path=":category/:productId" element={<ProductPage />} />
   </Routes>
  );
};
