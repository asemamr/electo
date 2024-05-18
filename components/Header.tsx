import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { cookies } from "next/headers";
import { getCart, getProduct } from "@/lib/shopify";
import Cart from "./Cart";
import { ProductType } from "@/lib/types";

export default async function Header() {
  const cartId = cookies().get("cart-id");
  let cart;
  if (cartId) {
    cart = await getCart(cartId.value);
    console.log("this is the cart from the header", cart?.lines)
    }
  return (
    <nav className="flex justify-between items-center w-full px-24 h-[70px] relative">
      <Link href="/">
        <Image src={Logo} alt="the electo logo" width={130} height={30} />
      </Link>

      <div>
        <Link href="/about">About</Link>
      </div>
      {
        cart ? (

      <Cart cart={cart}  />
        ) : (
            <div>
              You don't have any order
            </div>
        )
      }
    </nav>
  );
}
