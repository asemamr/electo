"use client";
import { ProductType } from "@/lib/types";
import Product from "./Product";
import { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function SlideProducts({
  data,
}: {
  data: ProductType[];
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [scrollEnd, setScrollEnd] = useState({});

  function swipe(direct: "left" | "right") {
    const el = ref.current;
    if (el) {
      setScrollEnd(() => ({
        left: el.scrollLeft,
        right: el.scrollWidth - el.clientWidth - el.scrollLeft,
      }));
      //this the gap between the elements
      const gapSpace = 30;
      const itemsNumber = data.length;
      const scrollValue = (el.scrollWidth + gapSpace) / itemsNumber;

      el.scrollBy({
        left: direct === "left" ? scrollValue : -scrollValue,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="relative">
      <div
        className="flex gap-3 overflow-x-scroll no-scrollbar transition-all "
        ref={ref}
      >
        {data.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <button
        onClick={() => swipe("right")}
        className="w-10 h-10 border-[1px] disabled:bg-gray-500 -z-0 top-1/2 -translate-y-1/2 text-xl border-black bg-white text-black flex justify-center items-center rounded-full hover:bg-black transition-colors hover:text-white absolute -left-10"
        disabled={scrollEnd.left < 400}
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={() => swipe("left")}
        className="w-10 h-10 border-[1px] -z-0 top-1/2 -translate-y-1/2 text-xl border-black bg-white text-black flex justify-center items-center rounded-full hover:bg-black transition-colors hover:text-white absolute -right-10"
      >
        <GrFormNext />
      </button>
    </div>
  );
}
