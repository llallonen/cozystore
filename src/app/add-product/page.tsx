import FormSubmitBtn from "@/components/FormSubmitBtn";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - cozystore",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageURL")?.toString();
  const price = Number(formData.get("price"));

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields values");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect('/')
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product")
  }
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageURL"
          placeholder="image URL (please use only unsplash.com URLs)"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <FormSubmitBtn className="btn-block">Add product</FormSubmitBtn>
      </form>
    </div>
  );
}
