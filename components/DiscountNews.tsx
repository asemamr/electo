"use client";
import { motion as m } from "framer-motion";
import Marquee from "react-fast-marquee";
import { IoTriangle } from "react-icons/io5";

export default function DiscountNews() {
  return (
    <div className="bg-green-open text-black h-14  w-screen max-w-full flex items-center">
      <Marquee direction="left" speed={100}>
        <h2 className="whitespace-nowrap flex gap-10 text-xs font-semibold items-center">
          <span>FREE SHIPPING AND RETURNS</span>
          <IoTriangle className="text-[10px]" />
          <span>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</span>
          <IoTriangle className="text-[10px]" />
          <span>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</span>
          <IoTriangle className="text-[10px]" />
          <span>FREE SHIPPING AND RETURNS</span>
          <IoTriangle className="text-[10px]" />
          <span>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</span>
          <IoTriangle className="text-[10px]" />
          <span>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</span>
        </h2>
      </Marquee>
    </div>
  );
}
