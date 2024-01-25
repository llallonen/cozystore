import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";

interface SearchPageProprs {
  searchParams: { query: string };
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProprs) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        {
          description: { contains: query, mode: "insensitive" },
        },
      ],
    },
    orderBy: { id: "desc" },
  });

  if (products.length === 0) {
    return <div className="text-center">No products found</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
