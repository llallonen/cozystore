import React from "react";
import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-200 transition-shadow hover:shadow-md"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={600}
          className="h-96 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="">
          {product.name}{" "}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
};

export default ProductCard;
