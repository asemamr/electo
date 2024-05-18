"use client";
import { ProductType } from "@/lib/types";
import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product({ product }: { product: ProductType }) {
  const idSegments = product.id.split("/");
  const accessibleId = idSegments[idSegments.length - 1];
  return (
    <Link href={`${process.env.NEXT_PUBLIC_URL}/product/${accessibleId}`} className="group min-w-[calc(25%-(36px/4))] bg-white border hover:border-blue-600 rounded-xl relative overflow-hidden transition-colors flex" >
      <div className="w-[400px] overflow-hidden relative h-[300px]">
        <AnimatePresence>
          <m.img
            src={product.images[0]?.url}
            alt={product.title}
            width={1000}
            height={500}
            className="object-cover w-full h-[300px] group-hover:scale-110 duration-[5s] transition-transform ease-linear absolute left-0 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute left-3 bottom-3 p-1 h-9 max-h-20 flex bg-white/70 backdrop-blur-md border rounded-full justify-between gap-3 items-center max-w-[calc(100%-24px)] font-semibold text-xs">
        <h2 className=" line-clamp-2 ml-2">{product.title}</h2>
        <p className="font-semibold text-white py-1 px-4 bg-blue-600 rounded-full h-full">
          ${product.priceRange.maxVariantPrice.amount}.99
        </p>
      </div>
    </Link>
  );
}
