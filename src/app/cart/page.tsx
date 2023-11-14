import { getCart } from "@/lib/db/cart";
import CartItem from "./ CartItem";
import { setProductQuatity } from "../products/[id]/actions";

export const metadata = {
  title: "Your cart - cozystore",
};
export default async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Shopping cart</h1>
      {cart?.items.map(item => (
        <CartItem cartItem={item} key={item.id} setProductQuantity={setProductQuatity}/>
      ))}
    </div>
  );
}
