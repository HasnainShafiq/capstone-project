import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container rounded-sm h-60 md:h-80 lg:h-96">
      <div className="background-image md:shrink-0  bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="category-body-container">
        <h2 className="font-heading uppercase tracking-wide text-neutral-100 text-lg font-bold md:text-xl lg:text-2xl">
          {" "}
          {title}{" "}
        </h2>
        <a
          href=""
          className="uppercase font-body font-bold italic tracking-wider text-neutral-50 border border-white py-2 mt-2 mx-auto px-4 max-w-fit hover:bg-indigo-900 hover:text-neutral-50 transition-colors"
        >
          Shop now
        </a>
      </div>
    </div>
  );
};

export default CategoryItem;
