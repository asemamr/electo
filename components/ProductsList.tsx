import { ProductType } from "@/lib/types";
import Image from "next/image";
import Product from "./Product";

export default async function ProductsList() {
  const res = await fetch("https://dummyjson.com/products");
  const { products }: { products: ProductType[] } = await res.json();
  return (
    <div className="flex flex-wrap gap-3">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
