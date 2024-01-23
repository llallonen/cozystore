import { getCart } from "@/lib/db/cart";
import CartItem from "./ CartItem";

import { formatPrice } from "@/lib/format";
import { setProductQuantity } from "../products/[id]/actions/setProductQuantity";

export const metadata = {
  title: "Your cart - cozystore",
};
export default async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Shopping cart</h1>
      {cart?.items.map((item) => (
        <CartItem
          cartItem={item}
          key={item.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && (
        <p>Your cart is empty. Wanna to add something?</p>
      )}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}
