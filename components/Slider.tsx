"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import { GoDotFill } from "react-icons/go";
import Slide1 from "@/public/slide_1.png";
import Slide2 from "@/public/slide_2.png";
import Slide3 from "@/public/slide_3.png";
import { AnimatePresence, motion } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Slider() {
  const [index, setIndex] = useState<number>(0);
  const [rightOrLeft, setRightOrLeft] = useState<string>("left");
  const arr = [0, 1, 2];

  const slides = [
    {
      color: "bg-[#f8f8f8]",
      image: Slide1,
      title: "Savings for dads and grads",
    },
    {
      color: "bg-[#fef7ee]",
      image: Slide2,
      title: "Modern design",
    },
    {
      color: "bg-[#f0fbfe]",
      image: Slide3,
      title: "Fast charging",
    },
  ];

  function moveSlide(direction: string) {
    if (direction === "right") {
      setRightOrLeft("right");
      if (index === slides.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
    if (direction === "left") {
      setRightOrLeft("left");
      if (index === 0) {
        setIndex(slides.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  }
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     moveSlide("right");
  //   }, 6000);
  //   return () => clearInterval(intervalId);
  // }, [moveSlide]);

  return (
    <div className="max-w-full overflow-hidden">
      <div className="absolute w-full left-0 top-1/2 -translate-y-1/2 flex justify-between text-5xl z-10">
        <SlArrowLeft onClick={() => moveSlide("left")} />
        <SlArrowRight onClick={() => moveSlide("right")} />
      </div>
      {/* <AnimatePresence mode="wait">{slides[index]}</AnimatePresence> */}
      <div className="relative overflow-hidden w-screen flex flex-nowrap">
        {slides.map(({ color, title, image }, i) => (
          <Hero
            color={color}
            image={image}
            title={title}
            index={index}
            key={title}
            order={i}
          />
        ))}
      </div>
      <div className="flex gap-2 absolute bottom-10 left-1/2 -translate-x-1/2">
        {arr.map((i) => (
          <span
            key={i}
            className={`block w-3 h-3 rounded-full ${
              index === i ? "bg-black shadow-xl -translate-y-1" : "bg-gray-500 "
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
