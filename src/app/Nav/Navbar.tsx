import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import CartBtn from "./CartBtn";

async function searchProduct(formData: FormData) {
  "use server";

  const searchQuery = formData.get("search")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="bg-base-300">
      <div className="navbar m-auto max-w-6xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="cozystore" />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProduct}>
            <div className="form-control">
              <input
                name="search"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
              ></input>
            </div>
          </form>
          <CartBtn cart={cart} />
        </div>
      </div>
    </div>
  );
}
