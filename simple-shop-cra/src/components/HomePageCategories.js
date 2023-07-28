import React from "react";
import { Link } from "react-router-dom";
const HomePageCategories = () => {
  let categoriesDescriptions = [
    {
      name: "Guns",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-sm.jpg",
      path: "/products/Guns",
    },
    {
      name: "Special",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
      path: "/products/Special",
    },
    {
      name: "Other",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-sm.jpg",
      path: "/products/Other",
    },
  ];

  categoriesDescriptions = categoriesDescriptions.map((desc) => {
    const { name, description, img, path } = desc;
    return (
      <div
        className={`categories-description categories-descriptions__${name}`}
      >
        <div className="categories-descriptions__image">
          <img src={img} alt="" />
        </div>
        <div className="categories-descriptions__info">
          <h3 className={`categories-descriptions__info-name`}>{name}</h3>
          <p className={`categories-descriptions__info-description`}>
            {description}
          </p>
          <div className="categories-descriptions__link">
            <Link to={path}>GO!</Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2>Check what we can offer you!</h2>
      <div className="categories-descriptions">{categoriesDescriptions}</div>
    </>
  );
};

export default HomePageCategories;
