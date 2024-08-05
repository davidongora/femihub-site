import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEHOST } from "../use";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useGlobalContext } from "../context/GlobalContext";
import Message from "./Message";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductSection = ({ title }) => {
  const { products, setProducts } = useGlobalContext();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (products.length <= 0) {
      fetchProducts();
    }
  }, []);


  const fetchProducts = async () => {
    try {
      setIsProcessing(true);

      const res = await fetch(`${BASEHOST}/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      setProducts(data);
      setIsProcessing(false);
    } catch (error) {
      setError(error.message);
      setIsProcessing(false);
    }
  };





  let currentProducts = []
  let totalPages = 0

  if (products.length > 0) {
    totalPages = Math.ceil(products.length / itemsPerPage);

    currentProducts = products?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
      {error && (
        <Message onClose={() => setError(null)}>Something went wrong..</Message>)}
      {isProcessing ? (
        <Message variant="success">please wait...</Message>
      ) : currentProducts.length > 0 && (
        <>
    
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
            {currentProducts.map((product, index) => {
              return (<ProductCard key={index} {...product} />)
            })}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className={`mx-1 px-3 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-custom-pink text-white"
                }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`mx-1 px-3 py-2 rounded-md ${currentPage === page
                  ? "bg-custom-pink text-white"
                  : "bg-gray-300"
                  }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button
              className={`mx-1 px-3 py-2 rounded-md ${currentPage === totalPages
                ? "bg-gray-300"
                : "bg-custom-pink text-white"
                }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductSection;
