import React from "react";
import { Product } from "@prisma/client";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={"/products" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-md"
    >
      <div className="card-body">
        <h2 className="">{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
