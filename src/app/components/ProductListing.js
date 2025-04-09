"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = {
  recommended: "Recommended",
  newest: "Newest First",
  popular: "Popular",
  priceHighToLow: "Price: High to Low",
  priceLowToHigh: "Price: Low to High",
};

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("recommended");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: "All",
    occasion: "All",
    work: "All",
    fabric: "All",
    segment: "All",
    suitableFor: "All",
    rawMaterials: "All",
    pattern: "All",
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setShowFilters(window.innerWidth > 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = [...products];

    if (filters.customizable) {
      result = result.filter((p) => p.category === "electronics");
    }

    if (filters.idealFor === "Men") {
      result = result.filter((p) => p.category === "men's clothing");
    } else if (filters.idealFor === "Women") {
      result = result.filter((p) => p.category === "women's clothing");
    }

    switch (sortOption) {
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "priceHighToLow":
        result.sort((a, b) => b.price - a.price);
        break;
      case "priceLowToHigh":
        result.sort((a, b) => a.price - b.price);
        break;
    }

    setFilteredProducts(result);
  }, [products, filters, sortOption]);

  const updateFilter = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  if (loading) return <div className="container">Loading products...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="container">
      <div className="hero">
        <h1>Discover Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur...</p>
      </div>

      <div className="controls-bar">
      <div className="controls-bar-inner">
      <span className="item-length">{filteredProducts.length} ITEMS</span>
        <span
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
         {showFilters ? "< Hide Filters" : "> Show Filters"}
        </span>
      </div>
        <div className="mid-line"></div>
        <span
          className="sort-button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {SORT_OPTIONS[sortOption]} <ChevronDown size={16} />
        </span>
      </div>

      <div className="product-listing">
        <Sidebar
          activeFilters={filters}
          onFilterChange={updateFilter}
          showFilters={showFilters}
          //toggleFilters={() => setShowFilters(!showFilters)}
        />
        <div className="products-container">
          <div className="sort-container">
            {showDropdown && (
              <div className="sort-dropdown">
                {Object.entries(SORT_OPTIONS).map(([key, label]) => (
                  <div
                    key={key}
                    className="sort-option"
                    onClick={() => {
                      setSortOption(key);
                      setShowDropdown(false);
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
