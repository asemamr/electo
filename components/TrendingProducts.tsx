import { getCollectionProducts } from "@/lib/shopify";
import SlideProducts from "./SlideProducts";

export default async function TrendingProducts() {
  const res = await getCollectionProducts("Trendings");
  let data: [] | typeof res = [];
  if (!("error" in res)) {
    data = res;
  }
  return (
    <div className="my-10">
      <h2 className="text-[42px]">Trending Products</h2>
      <SlideProducts data={data} />
    </div>
  );
}
``;
