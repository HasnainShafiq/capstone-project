import CategoriesMenu from "../../components/categories/CategoriesMenu";
import { ProductsCarousel } from "../../components/products-carousel/ProductsCarousel";
import { SignIn } from "../sign-in/SignIn";
import { Outlet } from "react-router-dom";

const Home = () => {

  const categories = [
    {
      id: 1,
      title: "Jiu-Jitsu Gi",
      imageUrl: "https://i.ibb.co/BPK6QL6/42971bfb5d830c05efaa9f45b5e72b08.jpg",
    },
    {
      id: 2,
      title: "Belts",
      imageUrl: "https://i.ibb.co/VCdMtnt/whitebelt-edit2.jpg",
    },
    {
      id: 3,
      title: "Accessories",
      imageUrl: "https://i.ibb.co/BPK6QL6/42971bfb5d830c05efaa9f45b5e72b08.jpg",
    },
  ];

  return (
    <>
      <div className="w-full pb-4">
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
            <h1 className="font-heading tracking-tight text-5xl text-center text-neutral-50 uppercase z-10 lg:text-7xl">
              We are HaMeem BJJ.
            </h1>
            <h3 className="font-heading text-sm md:text-md lg:text-lg xl:text-xl">Faith <span className="inline-block font-sans text-sm md:text-md lg:text-lg xl:text-xl mx-1">x</span> Discipline <span className="inline-block font-sans text-sm md:text-md lg:text-lg xl:text-xl mx-1">x</span> Brotherhood</h3>
            <a
              href=""
              className="uppercase font-body font-bold italic z-10 tracking-wider text-neutral-50 border border-white py-2 mt-2 mx-auto px-4 max-w-fit text-sm md:text-md lg:text-lg hover:bg-indigo-900 hover:text-neutral-50 transition-colors"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
      <CategoriesMenu categories={categories} />
      <ProductsCarousel />
    </>
  );
};

export default Home;
