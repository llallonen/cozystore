"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import Image from "next/image";

interface CartItemProps {
  cartItem: CartItemWithProduct;
}

export default function CartItem({
  cartItem: { product, quantity },
}: CartItemProps) {
  return (
    <div>
      <div className="items-center/ flex flex-wrap">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          className="rounded-lg"
        />
      </div>
      <div className="divider"></div>
    </div>
  );
}
