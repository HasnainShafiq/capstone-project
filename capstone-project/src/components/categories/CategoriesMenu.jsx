import CategoryItem from "../category-item/CategoryItem";
import "./categories-menu.styles.scss";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="px-4 py-8 bg-neutral-950">
      <h2 className="text-left pb-4 text-neutral-50 text-md font-heading">Shop our range</h2>
      <div className="categories-container">
        {categories.map((category) => (
          // pass the category object as a prop and destructure its key-values within CategoryItem.
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
