import { IoClose } from "react-icons/io5";
import Quantity from "./Quantity";
import { motion as m } from "framer-motion";
import { Cart, ProductType } from "@/lib/types";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function CartModal({
  setOpen,
  cart,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cart: Cart;
}) {

  return (
    <m.div
      initial={{ x: 0 }}
      animate={{ x: -400 }}
      exit={{ x: 0 }}
      key={open}
      transition={{ type: "spring", bounce: 0.1 }}
      className="h-screen w-[400px] bg-white/80 backdrop-blur-md fixed top-0 -right-[400px] z-10 py-8 px-4 flex flex-col justify-between"
    >
      <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">My Cart</h2>
        <button
          onClick={() => setOpen(false)}
          className="w-10 h-10 border border-gray-400 rounded-lg text-xl flex justify-center items-center "
        >
          <IoClose className="hover:scale-125 transition-all" />
        </button>
      </div>

      <div className="flex flex-col gap-y-3 mt-4">
        {cart.lines.edges.map(({ node: { merchandise: { product } } }) => (
          <div className="flex gap-x-2 border border-gray-400 rounded-lg ">
            <Image src={product.featuredImage.url} alt={ product.featuredImage.altText} width={80} height={80} className="rounded-lg" />
            <div className="flex flex-col justify-between py-1">

            <h2>{ product.title}</h2>
              <p className="font-semibold text-gray-500">{ product.priceRange.maxVariantPrice.amount} TL x 1</p>
            </div>
        
          </div>
        ))}
      </div>
      </div>
      <div className="w-full">
        <h2 className="border-b border-gray-400 pb-3">Total: { cart.cost.totalAmount.amount}</h2>
          <Link href={cart.checkoutUrl}>
        <Button color="green" content="Proceed to Checkout"  />
          </Link>
      </div>
    </m.div>
  );
}
