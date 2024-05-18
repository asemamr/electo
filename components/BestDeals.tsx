import Image from "next/image";
import src from "../public/bn1.jpg";
import Button from "./Button";

export default function BestDeals() {
  return (
    <div className="group relative w-full h-[600px] rounded-3xl overflow-hidden my-20 flex items-center pl-20">
      <Image
        src={src}
        alt="the image of the product"
        className="absolute w-full h-full left-0 top-0 object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
      />
      <div className="relative z-10 text-white ">
        <h5 className="font-bold text-sm">SALE UP TO 30% OOF TODAY</h5>
        <h2 className="text-5xl py-2">Best Deals Discounts</h2>
        <p className="text-lg mt-2">Fast wireless charging on-the-go</p>
        <Button color="green" content="Shop Collection" />
      </div>
    </div>
  );
}
