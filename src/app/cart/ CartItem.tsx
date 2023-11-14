"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartItemProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartItem({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartItemProps) {
  const [isPending, startTransition] = useTransition();

  const quatityOpt: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quatityOpt.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div>
        <Link href={"/products" + product.id} className="font-bold"></Link>
        <div> Price: {formatPrice(product.price)}</div>
        <div className="flex items-center gap-2">
          Quantity:
          <select
            className="select select-bordered w-full max-w-[80px]"
            defaultValue={quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.currentTarget.value);
              startTransition(async () => {
                await setProductQuantity(product.id, newQuantity);
              });
            }}
          >
            {quatityOpt}
          </select>
        </div>
        <div className="flex items-center gap-3">
          Total: {formatPrice(product.price * quantity)}
          {isPending && (
          <span className="loading loading-spinner loading-sm" />
        )}
        </div>

      </div>
      <div className="divider"></div>
    </div>
  );
}
