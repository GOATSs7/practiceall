import React, { useState, useEffect } from "react";
import Loading from "../githubproject/Loading";
import ProductCard from "./ProductCard";
import CategoryBtn from "./CategoryBtn";
import NavbarProduct from "./NavbarProduct";

const Product = () => {
  const [productList, setProductList] = useState([]);

  const [loading, setLoaing] = useState(true);

  const [categorybtn, setCategoryBtn] = useState([]);

  //for filtering category
  const filterElem = (category) => {
    if (category === "All") {
      setProductList(productList);
      return;
    }
    console.log(category);
    const UpdatedItems = productList.filter((currElem) => {
      return currElem.category === category;
    });
    setProductList(UpdatedItems);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchApi = await fetch("https://dummyjson.com/products");
        setLoaing(true);
        const data = await fetchApi.json();
        console.log(data.products);

        setProductList(data.products);
        setLoaing(false);

        //for all category
        const allCatNames = [
          ...new Set(data.products.map((elemCat) => elemCat.category)),
          "All",
        ];
        setCategoryBtn(allCatNames);
      } catch (error) {
        setLoaing(true);
        console.log(error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavbarProduct />
      <CategoryBtn categorybtn={categorybtn} filterElem={filterElem} />
      <ProductCard productList={productList} />
    </>
  );
};

export default Product;
