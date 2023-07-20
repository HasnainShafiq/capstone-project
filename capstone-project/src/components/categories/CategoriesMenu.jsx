import CategoryItem from "../category-item/CategoryItem";
import "./categories-menu.styles.scss";


const categories = [
  {
    id: 1,
    title: "kimonos",
    imageUrl: "https://i.ibb.co/BPK6QL6/42971bfb5d830c05efaa9f45b5e72b08.jpg",
    route: 'shop/kimonos'
  },
  {
    id: 2,
    title: "belts",
    imageUrl: "https://i.ibb.co/VCdMtnt/whitebelt-edit2.jpg",
    route: 'shop/belts'
  },
  {
    id: 3,
    title: "Rashguards",
    imageUrl: "https://i.ibb.co/BPK6QL6/42971bfb5d830c05efaa9f45b5e72b08.jpg",
    route: '/'
  },
];

const CategoriesMenu = () => {

  return (
    <div className="w-full flex justify-center">
      <div className="py-8 px-4 w-full sm:py-10 lg:mx-auto lg:max-w-screen-2xl lg:px-8">
        <h2 className="text-left uppercase pb-4 text-neutral-50 text-lg md:text-xl font-heading tracking-wide">
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
