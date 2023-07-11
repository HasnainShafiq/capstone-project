import "./category-item.styles.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;


  const navigate = useNavigate();

  const onNavigateHandler = navigate(route);

  return (
    <Link to={route}  className="category-container rounded-sm h-60 md:h-80 lg:h-96">
      <div className="background-image md:shrink-0  bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="category-body-container">
        <h2 className="font-Nofex uppercase tracking-wide text-neutral-100 text-lg font-bold md:text-xl lg:text-2xl">
          {" "}
          {title}{" "}
        </h2>
        <a
          href=""
          className="uppercase font-body font-bold italic tracking-wider text-neutral-50 border border-white py-2 mt-2 mx-auto px-4 max-w-fit text-sm md:text-md lg:text-lg  hover:bg-indigo-900 hover:text-neutral-50 transition-colors"
        >
          Shop now
        </a>
      </div>
    </ Link>
  );
};

export default CategoryItem;
