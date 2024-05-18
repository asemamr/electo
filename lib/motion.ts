import { easeIn, easeInOut, Variants } from "framer-motion";

type Direction = "right" | "left" | "up" | "down";

export function slide(direction: Direction, delay: number): Variants {
  return {
    hidden: {
      x: direction === "right" ? 100 : direction === "left" ? -100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        ease: "backInOut",
      },
    },
  };
}

function findIndexOfArray<T>(array: T[], item: T) {
  return array.findIndex((eachItem)=> eachItem === item);
}

findIndexOfArray(["12", 42,53], 12);
