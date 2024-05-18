import Image, { StaticImageData } from "next/image";
import { motion as m, AnimatePresence, Variants } from "framer-motion";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Button from "./Button";
import { slide } from "@/lib/motion";

type HeroProps = {
  image: StaticImageData;
  title: string;
  color: string;
  index: number;
  order: number;
};

export default function Hero({ image, title, color, index, order }: HeroProps) {
  return (
    <div
      style={{ transform: `translate(-${index}00vw, 0)` }}
      className={`h-[calc(100vh-70px)] w-full min-w-full max-w-full flex items-center justify-between ${color}  pl-12 pr-8 custom-height relative flex-shrink-0 flex-grow-0 transition-transform duration-500 ease-[cubic-bezier(0.95, 0.05, 0.795, 0.035)]`}
    >
      <div className="flex flex-col gap-6 w-1/2">
        <m.p
          key={index + 1}
          variants={slide("down", 0.3)}
          initial="hidden"
          animate="show"
          className=" text-sm font-semibold uppercase text-[#545454]"
        >
          up to 40% off chargers and more.
        </m.p>

        <m.h2
          className="text-7xl "
          key={index + 2}
          variants={slide("down", 0.7)}
          initial="hidden"
          animate="show"
        >
          {title}
        </m.h2>
        <m.div
          key={index + 3}
          variants={slide("down", 0.8)}
          initial="hidden"
          animate="show"
        >
          <Button color="black" content="Shop Collection" arrow />
        </m.div>
      </div>
      <div className={`${order === 0 && "w-2/3"}`}>
        <Image
          src={image}
          alt="the image of hero"
          className="object-cover w-full max-w-full"
        />
      </div>
    </div>
  );
}
