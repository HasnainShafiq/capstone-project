import CategoriesMenu from "../../components/categories/CategoriesMenu";
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
      <div className="relative flex justify-center items-center h-96 lg:h-screen" style={{backgroundImage: "url('https://i.ibb.co/VCdMtnt/whitebelt-edit2.jpg')", backgroundOrigin: 'border-box', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className="flex flex-col justify-center mx-auto items-center  max-w-md relative text-neutral-300 py-10">
          <h1 className="font-heading tracking-tighter text-5xl text-center text-neutral-50 uppercase z-10">
            We are HaMeem BJJ.
          </h1>
          <a
            href=""
            className="uppercase font-sans font-semibold z-10 tracking-wider text-neutral-50 border border-white py-2 mt-2 mx-auto px-4 max-w-fit hover:bg-indigo-600 hover:text-neutral-50 transition-colors"
          >
            Shop now
          </a>
        </div>
      </div>
      <CategoriesMenu categories={categories} />
    </>
  );
};

export default Home;
