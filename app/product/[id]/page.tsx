import Gallery from "@/components/Gallery";
import Product from "@/components/Product";
import ProductInfo from "@/components/ProductInfo";
import { SHOPIFY_PREFIX_ID } from "@/CONSTS/CONSTS";
import { getProduct } from "@/lib/shopify";
import { ProductType } from "@/lib/types";
import { notFound } from "next/navigation";
import HtmlDescription from "@compo/HtmlDescription";
export default async function productPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(`${SHOPIFY_PREFIX_ID}${params.id}`, "no-cache");
  if (!product || "error" in product) {
    return notFound();
  }
  return (
    <div>
      <div className=" py-10 px-10 flex gap-x-5 mt-10 justify-between rounded-2xl border">
        <Gallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <HtmlDescription html={product.descriptionHtml} />
    </div>
  );
}
