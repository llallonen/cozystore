import { getCart } from "@/lib/db/cart";
import CartItem from "./ CartItem";

export const metadata = {
  title: "Your cart - cozystore",
};
export default async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Shopping cart</h1>
      {cart?.items.map(item => (
        <CartItem cartItem={item} key={item.id}/>
      ))}
    </div>
  );
}
