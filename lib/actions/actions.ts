"use server";
import { cookies } from "next/headers";
import { addCartLine, createCart, getCart } from "../shopify";
import { Variant } from "../types";
import { revalidatePath } from "next/cache";

export async function AddToCart(variant: Variant) {
  if (variant.availableForSale) {
    let cartId = cookies().get("cart-id");
    let cart;
  if (!cartId) {
  try {
      cart = await createCart();
  }
  catch (e) {
      console.error("cannot create the cart", e);
  }
  if (cart) {
      cookies().set("cart-id", cart.id);
    }
  } else {
      try {
        cart = await getCart(cartId.value);
        console.log("this is the return value from the getCart on action", cart);
      } catch (e) {
        console.error("cannot get the cart", e);
      }
    }
    if (cart) {
      const res = await addCartLine(cart.id, variant.id)
      revalidatePath("/")
    }
  }
}
