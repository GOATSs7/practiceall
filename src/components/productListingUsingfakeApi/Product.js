import React, { useState, useEffect, useCallback } from "react";
import Loading from "../githubproject/Loading";
import ProductCard from "./ProductCard";
import CategoryBtn from "./CategoryBtn";
import NavbarProduct from "./NavbarProduct";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoaing] = useState(true);
  const [categorybtn, setCategoryBtn] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  //for filtering category
  const filterElem = useCallback(
    (category) => {
      if (category === "All") {
        setFilteredProduct(productList);
        return;
      } else {
        const UpdatedItems = productList.filter((currElem) => {
          return currElem.category === category;
        });
        // console.log(UpdatedItems);
        setFilteredProduct(UpdatedItems);
      }
    },
    [productList]
  );
  //

  // useeffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        document.title = "SaRuKart";
        const fetchApi = await fetch("https://dummyjson.com/products");
        setLoaing(true);
        const data = await fetchApi.json();
        console.log(data.products);

        setProductList(data.products);
        setFilteredProduct(data.products);
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

  // for loading true
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavbarProduct />
      <CategoryBtn categorybtn={categorybtn} filterElem={filterElem} />
      <ProductCard
        productList={filteredProduct}
        // filteredProduct={filteredProduct}
      />
    </>
  );
};

export default Product;
