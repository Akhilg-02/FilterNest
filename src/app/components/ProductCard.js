"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const imageSrc = product?.image || "/placeholder.svg";

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="product-card">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`${product.title} - product image`}
          className="product-image"
        />
        {/* <Image 
      className="product-image"
      //width={180} height={37}
      src={imageSrc}
      alt={`${product?.title || "Product"} - product image`}
      /> */}

        <h3 className="product-name" title={product.title}>
          {product.title.length > 30
            ? product.title.slice(0, 30) + "..."
            : product.title}
        </h3>

        <div className="product-bottom-row">
          <p className="product-price">
            Tap to + heart an account to see pricing
          </p>
          <button
            className="favorite-btn"
            onClick={toggleFavorite}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart size={16} fill={isFavorite ? "#000" : "none"} />
          </button>
        </div>
      </div>
    </>
  );
}
