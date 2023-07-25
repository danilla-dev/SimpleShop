import React from "react";
import { Link } from "react-router-dom";
const HomePageCategories = () => {
  let categoriesDescriptions = [
    {
      name: "Guns",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
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
        <img src={img} alt="" />
        <div className="categories-descriptions-info">
          <h2 className={`categories-descriptions-info__name-${name}`}>
            {name}
          </h2>
          <p className={`categories-descriptions-info__description-${name}`}>
            {description}
          </p>
        <Link to={path}>GO!</Link>
        </div>
      </div>
    );
  });
  return (
    <div className="categories-descriptions">{categoriesDescriptions}</div>
  );
};

export default HomePageCategories;
