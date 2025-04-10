"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="product-card">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="product-image"
        />

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
            <Heart size={16} fill={isFavorite ? "#ff4d4d" : "none"} />
          </button>
        </div>
      </div>
    </>
  );
}
