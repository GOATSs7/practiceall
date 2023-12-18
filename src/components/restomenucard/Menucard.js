import React, { useState } from "react";
import Menu from "./Menu";
import MenuCardBody from "./MenuCardBody";

import CategoryBtn from "./CategoryBtn";

const allCatNames = [
  ...new Set(Menu.map((elemCat) => elemCat.category)),
  "All",
];

const Menucard = () => {
  const [item, setItem] = useState(Menu);
  const [categorybtn, setCategoryBtn] = useState(allCatNames);

  const filterElem = (category) => {
    if (category === "All") {
      setItem(Menu);
      return;
    }
    const UpdatedItems = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setItem(UpdatedItems);
  };

  return (
    <>
      <h1 className="d-flex justify-content-center my-3 ">
        Order Your Food Here
      </h1>
      <CategoryBtn categorybtn={categorybtn} filterElem={filterElem} />
      <MenuCardBody item={item} />
    </>
  );
};

export default Menucard;
