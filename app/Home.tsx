import DiscountNews from "@compo/DiscountNews";
import BestDeals from "@compo/BestDeals";
import Slider from "@compo/Slider";
import DiscountTimer from "@compo/DiscountTimer";
import { shopifyFetch } from "@/lib/shopify/shopifyFetch";
import { getProductsQuery } from "@/lib/shopify/queries";
import TrendingProducts from "@/components/TrendingProducts";


export default async function Home() {
  const result = await shopifyFetch(getProductsQuery);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Slider />
      <DiscountNews />
      <div className="mx-auto w-[1420px] flex flex-col">
        <TrendingProducts />
        <BestDeals />
        <DiscountTimer />
      </div>
    </main>
  );
}
