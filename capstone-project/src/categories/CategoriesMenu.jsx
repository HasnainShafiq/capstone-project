import CategoryItem from "../category-item/CategoryItem";
import "./categories-menu.styles.scss";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        // pass the category object as a prop and destructure its key-values within CategoryItem.
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesMenu;
