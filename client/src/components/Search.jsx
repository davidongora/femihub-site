import React, { useEffect, useState } from "react";
import ProductSection from "./ProductSection";
import { useLocation } from "react-router-dom";
import { listProducts } from "../lib/apiCalls";
import { useGlobalContext } from "../context/GlobalContext";
import SearchContainer from "./SearchContainer";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { setProducts, products } = useGlobalContext();
  const location = useLocation();
  const keyword = location?.search
    ? location.search.split("=")[1].split("&")[0]
    : "";
  const category = location?.search ? location.search.split("=")[2] : "0";

  const [searchParams, setSearchParams] =useSearchParams()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await listProducts(searchParams.get("search"), searchParams.get("catId"));
        
        if(products.length > 0){
          setProducts([]);
          setProducts(products);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

      fetchProducts();
    
  }, [keyword, category]);
  return (
    <div className='px-2 md:px-[100px] mt-2'>
      <SearchContainer/>
      <ProductSection title='Search Results' />
    </div>
  );
};

export default Search;
