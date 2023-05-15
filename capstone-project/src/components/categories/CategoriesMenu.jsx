import CategoryItem from "../category-item/CategoryItem";
import "./categories-menu.styles.scss";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="py-8 px-4 w-full sm:py-10 lg:mx-auto lg:max-w-screen-2xl lg:px-8">
        <h2 className="text-left pb-4 text-neutral-50 text-lg md:text-xl font-heading tracking-wide">
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
