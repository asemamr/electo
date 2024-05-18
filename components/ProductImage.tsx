import { Images } from "@/lib/types";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, } from "next/navigation";

export default function ProductImage({
  images,
  selectedImage,
}: {
  images: Images;
  selectedImage: number;
}) {
  const ref = useRef(null);
  const [imageWidth, setImageWidth] = useState(500)
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
  useEffect(() => {
    if (ref.current !== null) {
      setImageWidth(ref.current.clientWidth)
      console.log("this is the width of the image", ref.current.clientWidth)
    }
  }, [ref])
  return (
    <div className="w-[500px] overflow-hidden relative rounded-2xl">
      <div
        className={`flex justify-between w-[2000px] transition-all duration-1000`}
        style={{ transform: `translateX(${selectedImage *  -500}px)` }}

      >
        {images.map((image) => (
          <Image
            ref={ref}
            src={image.url}
            key={image.id}
            alt="the product Image"
            width={500}
            height={0}
            className="h-auto w-[500px] "
          />
        ))}
      </div>
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
