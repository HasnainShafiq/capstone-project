import CategoriesMenu from "../../components/categories/CategoriesMenu";
import { ProductsCarousel } from "../../components/products-carousel/ProductsCarousel";
import { useContext } from "react";
import { CategoryPreview } from "../../components/category-preview/CategoryPreview";
import { CategoriesContext } from "../../contexts/categories.context";
import { Link } from "react-router-dom";



const Home = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      <div className="w-full pb-4 bg-neutral-950">
        <div
          className="relative rounded-sm flex justify-center items-center h-96 md:h-[32rem] lg:h-screen"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/VCdMtnt/whitebelt-edit2.jpg')",
            backgroundOrigin: "border-box",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center mx-auto items-center  max-w-md relative text-neutral-300 py-10 lg:max-w-2xl xl:max-w-3xl">
            <h1 className="font-heading tracking-tight text-4xl text-center text-neutral-50 uppercase z-10 sm:text-5xl lg:text-7xl">
              We are HaMeem BJJ.
            </h1>
            <h3 className="font-heading uppercase text-sm md:text-md lg:text-lg xl:text-xl">Faith <span className="inline-block font-sans uppercase text-sm md:text-md lg:text-lg xl:text-xl mx-1">x</span> Discipline <span className="inline-block font-sans uppercase text-sm md:text-md lg:text-lg xl:text-xl mx-1">x</span> Brotherhood</h3>
            <Link
              to={"/shop"}
              className="uppercase font-body font-bold italic z-10 tracking-wider text-neutral-50 border border-white py-2 mt-2 mx-auto px-4 max-w-fit text-sm md:text-md lg:text-lg hover:bg-indigo-900 hover:text-neutral-50 transition-colors"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
      <CategoriesMenu />
      <div className="py-8 px-4 w-full sm:py-10 lg:mx-auto lg:max-w-screen-2xl lg:px-8">

      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
          key={title}
          title={title}
          products={products}
          />
          )
        })}
        </div>
    </>
  );
};

export default Home;
