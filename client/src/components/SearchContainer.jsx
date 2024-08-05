import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASEHOST } from "../use";
import { HiSearch, HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { listCategories, listProducts } from "../lib/apiCalls";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchContainer = () => {
  const navigate = useNavigate();
  const { setProducts } = useGlobalContext();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([
    { id: "", name: "All Categories" },
  ]);

  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword || selectedCatId) {
      // setSearchParams(searchParams({
      //   search: keyword.trim(),
      //   catId: selectedCatId
      // }))
      navigate(
        `/products?search=${keyword
          .trim()
          .replace(" ", "-")}&catId=${selectedCatId}`
      );
    }
  };

  const OnFilter = async () => {
    try {
      const res = await fetch(`${BASEHOST}/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const products = await res.json();

      const filteredProducts = Array.from(products).filter(
        (prod) => prod?.category_id == selectedCatId
      );
      setProducts(filteredProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    OnFilter();
  }, [selectedCatId]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesdata = await listCategories();

        setCategories(Array.from(new Set([...categories, ...categoriesdata?.filter((cat) => cat.id !== 5)])));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="my-2  mx-auto ">
      <div className="relative flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full sm:w-48 px-4 py-2 text-white font-semibold border-2 bg-[#E4258F] rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:border-[#E4258F]-600"
          >
            <span className="truncate">{selectedCategory}</span>
            <HiChevronDown className="ml-2 h-5 w-5 text-white" />
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 w-full sm:w-48 mt-1 bg-white rounded-md shadow-lg">
              {categories.map((category, idx) => {

                return (
                  <Link
                    key={idx}
                    to={category.name.toLowerCase() === "all categories" ? "/" : `/products?search=${keyword
                      .trim()
                      .replace(" ", "-")}&catId=${category.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E4258F] hover:text-white"
                    onClick={(e) => {
                      setSelectedCategory(category.name);
                      setSelectedCatId(category.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category.name}
                  </Link>
                )

              })}
            </div>
          )}
        </div>
        <form className="flex w-full" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for health and wellness products..."
            className="flex-grow px-4 py-2 text-gray-700 bg-white border-2 rounded-l-full sm:rounded-l-none outline-none focus:border-[#E4258F]"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value)
              navigate(`/products?search=${e.target.value
                .trim()
                .replace(" ", "-")}&catId=${selectedCatId}`)
            }}
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-[#E4258F] border-2 border-[#E4258F] rounded-r-full hover:bg-[#C71B7B] focus:outline-none focus:ring-2 focus:ring-[#E4258F] focus:ring-opacity-50"
            onClick={handleSearch}
          >
            <HiSearch className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchContainer;
