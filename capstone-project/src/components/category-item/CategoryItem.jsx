import './category-item.styles.scss';


const CategoryItem = ({ category }) => {

    const {title, imageUrl} = category;

    return (
        <div className="category-container rounded-sm">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h2 className='font-heading uppercase text-stone-100 text-md font-bold'> {title} </h2>
            <a
            href=""
            className="uppercase font-sans font-semibold z-10 tracking-wider text-neutral-50 border border-white py-2 mt-2 mx-auto px-4 max-w-fit hover:bg-indigo-600 hover:text-neutral-50 transition-colors">Shop now</a>
          </div>
        </div>
    )
}

export default CategoryItem;