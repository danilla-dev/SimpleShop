import React from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

const HomePageCategories = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  let categoriesDescriptions = [
    {
      name: "Guns",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-sm.jpg",
      imgLG:
        "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-lg.jpg",
      path: "/products/Guns",
    },
    {
      name: "Special",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
      imgLG:
        "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
      path: "/products/Special",
    },
    {
      name: "Other",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-sm.jpg",
      imgLG:
        "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-lg.jpg",
      path: "/products/Other",
    },
  ];

  categoriesDescriptions = categoriesDescriptions.map((desc, index) => {
    const { name, description, img, imgLG, path } = desc;
    return (
      <div
        key={index}
        className={`categories-description categories-description__${name}`}
      >
        <div className="categories-description__image">
          <img src={isTablet ? imgLG : img} alt="" />
        </div>
        <div className="categories-description__info">
          <h3 className={`categories-description__info-name`}>{name}</h3>
        </div>
        <div className="categories-description__description">
          <p className="categories-description__description-text">
            {description}
          </p>
          <div className="categories-description__link">
            <Link to={path}>GO!</Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="home-page__categories-background">
      <div className="home-page__categories-background-shadow">
        <div className="home-page__categories wrapper">
          <h2>Check what we can offer you!</h2>
          <div className="categories-descriptions">
            {categoriesDescriptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCategories;
