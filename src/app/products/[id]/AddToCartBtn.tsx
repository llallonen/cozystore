"use client";

import { useState, useTransition } from "react";

interface AddToCartBtnProps {
  productId: string;
  incProductQuatity: (productId: string) => Promise<void>;
}

export default function AddToCartBtn({
  productId,
  incProductQuatity,
}: AddToCartBtnProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incProductQuatity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
      </button>
      {isPending && (
        <span className="loading loading-spinner loading-md"></span>
      )}
      {!isPending && success && (
        <span className="text-success">Added to cart</span>
      )}
    </div>
  );
}
