"use client";
import { motion as m } from "framer-motion";
import { Images } from "@/lib/types";
import Image from "next/image";
import {  useSearchParams } from "next/navigation";
import ProductImage from "./ProductImage";
import ProductImagesList from "./ProductImagesList";
import ProductImageTest from "./ProductImageTest";

export default function Gallery({ images }: { images: Images }) {
  const searchParams = useSearchParams();
  const selectedImage = Number(searchParams.get("image"));

  return (
    <div className="flex gap-2 relative self-start">
      <ProductImagesList images={images} selectedImage={selectedImage} />
      <ProductImageTest images={images} selectedImage={selectedImage} />
    </div>
  );
}
