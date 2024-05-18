"use client";
import { ProductType } from "@/lib/types";
import Button from "./Button";
import { GoArchive } from "react-icons/go";
import HtmlDescription from "@compo/HtmlDescription"
import { AddToCart } from "@/lib/actions/actions";
import AdditionalInfo from "./AdditionalInfo";
export default function ProductInfo({ product }: { product: ProductType }) {  
  console.log("variants", product.variants)
  const formAction = AddToCart.bind(null, product.variants[0])
  
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="font-semibold text-3xl">{product.title}</h2>
      <p className="bg-blue-600 px-2 py-1 rounded-full text-white self-start font-bold">
        {product.priceRange.maxVariantPrice.amount} TL
      </p>
      <form action={formAction}>
        <Button
          disabled={!product.variants[0].availableForSale}
          color="black"
          content={`Add to Cart `}
          icon={<GoArchive />}
          
        />
      </form>
      <p className="w-[600px]">{ product.description}</p>
      <AdditionalInfo />
    </div>
  );
}
