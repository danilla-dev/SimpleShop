import React from "react";
const HomePageCategories = () => {
  let categoriesDescriptions = [
    {
      name: "guns",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    },
    {
      name: "Special",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    },
    {
      name: "Other",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo. Similique, tempora? Optio commodi quo magni quae, nisi voluptatum saepe! Qui voluptatum magni mollitia quibusdam officiis ab magnam suscipit enim!",
      img: "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-sm.jpg",
    },
  ];

  categoriesDescriptions = categoriesDescriptions.map((desc) => {
    const { name, description, img } = desc;
    return (
      <div
        className={`categories-description categories-descriptions__${name}`}
      >
        <img src={img} alt="" />
        <h2 className={`categories-descriptions__${name}-name`}>{name}</h2>
        <p className={`categories-descriptions__${name}-description`}>
          {description}
        </p>
      </div>
    );
  });
  return (
    <div className="categories-descriptions">{categoriesDescriptions}</div>
  );
};

export default HomePageCategories;
