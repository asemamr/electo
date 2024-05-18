"use client";
import { IoCartOutline } from "react-icons/io5";
import { motion as m, AnimatePresence, easeInOut, easeIn } from "framer-motion";
import CartModal from "./CartModal";
import { Cart, ProductType } from "@/lib/types";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Cart({ cart }: { cart: Cart  }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="border p-2 rounded-lg relative"
        onClick={() => setOpen(!open)}
      >
        <IoCartOutline className="text-2xl" />
        {cart && (
          <span className="bg-blue-600 text-white flex justify-center items-center w-5 h-5 text-sm absolute -top-2 -right-2 rounded-md">
            {cart.lines.edges.length}
          </span>
        )}
      </button>
      <AnimatePresence mode="wait">
        {open && (
          <div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              key={open}
              className="h-screen w-screen bg-black/40 fixed top-0 left-0 z-10 transition-all duration-1000"
              onClick={()=> setOpen(false)}
            ></m.div>
            <CartModal setOpen={setOpen} cart={cart}  />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
