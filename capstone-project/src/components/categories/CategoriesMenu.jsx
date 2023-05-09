import CategoryItem from "../category-item/CategoryItem";
import "./categories-menu.styles.scss";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="px-2 py-2 mt-2 w-full max-w-screen-2xl md:p-4 lg:p-6">
        <h2 className="text-left pb-2 text-neutral-50 text-lg md:text-xl font-heading tracking-wide">
          Shop our range
        </h2>
        <div className="categories-container space-y-4 md:space-y-3 md:grid md:grid-cols-2 md:grid-rows-2">
          {categories.map((category) => (
            // pass the category object as a prop and destructure its key-values within CategoryItem.
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
