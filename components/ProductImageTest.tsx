import { Images } from "@/lib/types";
import { AnimatePresence, easeIn, easeInOut, motion as m } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function ProductImageTest({
  images,
  selectedImage,
}: {
  images: Images;
  selectedImage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quantity = searchParams.get("quantity") || 1;
  function slide(direction: "right" | "left") {
    if (direction === "right") {
      let previousImage;
      if (selectedImage === 0) {
        previousImage = images.length - 1;
      } else {
        previousImage = selectedImage - 1;
      }
      router.replace(`?image=${previousImage}&quantity=${quantity}`, {
        scroll: false,
      });
    } else {
      let previousImage;
      if (selectedImage === images.length - 1) {
        previousImage = 0;
      } else {
        previousImage = selectedImage + 1;
      }
      router.replace(`?image=${previousImage}&quantity=${quantity}`, {
        scroll: false,
      });
    }
  }
  return (
    <div className=" relative overflow-hidden w-[500px]">
      <AnimatePresence mode="sync">
        <m.div initial={{x: -80,  opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: -80, opacity: 0}} transition={{duration: .3, type: "spring", ease: easeIn}} key={selectedImage} className="w-[500px] overflow-hidden absolute rounded-2xl">
          <Image
            src={images[selectedImage].url}
            alt={images[selectedImage].id}
            priority
            loading="eager"
            width={500}
            height={600}
          />
        </m.div>
      </AnimatePresence>
      <div className="w-36 py-3 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center absolute bottom-10 left-1/2 -translate-x-1/2 text-2xl text-gray-500 font-thin">
        <span className="w-[1px] h-[80%] bg-gray-400 absolute left-1/2 -translate-x-1/2 top-1"></span>
        <GoArrowLeft
          className="w-1/2 hover:text-gray-800 hover:scale-105 transition-transform cursor-pointer"
          onClick={() => slide("right")}
        />
        <GoArrowRight
          className="w-1/2 hover:text-gray-800 hover:scale-105 transition-transform cursor-pointer"
          onClick={() => slide("left")}
        />
      </div>
    </div>
  );
}
