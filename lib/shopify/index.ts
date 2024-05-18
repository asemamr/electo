import {
  cartCreate,
  getAllProductsQuery,
  getCollectionProductsQuery,
  getCollectionQuery,
  getProductQuery,
  getCartQuery,
  getProductsQuery,
  addCartLineQuery,
} from "./queries";
import { Cart, ImageT, Images, ProductType, Variant, rawDataProduct } from "../types";

const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2024-01/graphql.json";
const domain = `https://${process.env.SHOPIFY_STORE_DOMAIN}`;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";

export async function shopifyFetch(
  query: string,
  variables? : {[key: string]: string}, 
  cache: RequestCache = "force-cache"
) {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: JSON.stringify({
        query,
        variables: {
          sortKey: "CREATED",
          reverse: false,
          ...variables
        },
      }),
      cache,
      ...{ tags: "collections" },
    });

    const res = await result.json();
    if (res.errors) {
      throw res.errors[0];
    }
    if (!res) {
      throw Error("there is no response");
    }
    return res;
  } catch (e) {
    return {
      error: e,
      query,
    };
  }
}
function reshapeImagesAndVariants(data: rawDataProduct): ProductType {
  let cleanImages: ImageT[] = [];
  let cleanVariants: Variant[] = [];
  if ("edges" in data.images) {
    cleanImages = data.images.edges.map((edge) => edge.node);
  }
  if ("edges" in data.variants) {
    cleanVariants = data.variants.edges.map((edge) => edge.node);
  }
  return {
    ...data,
    images: cleanImages,
    variants: cleanVariants,
  };
}
function reshapeData(rawData: {
  edges: [{ node: rawDataProduct }];
}): ProductType[] {
  return rawData.edges.map((edge) => reshapeImagesAndVariants(edge.node));
}
export async function getProduct(
  id: string, cache?:RequestCache  
): Promise<ProductType | { error: {} } | undefined> {
  try {
    const res = await shopifyFetch(getProductQuery, {id}  , cache);


    if (!res || !res.data.product) {
      throw Error(`there is no such a product with ${id} id`);
    }
    return reshapeImagesAndVariants(res.data.product);
  } catch (e) {
    if (e) {
      return { error: e };
    }
  }
}
export async function getCollectionProducts(handle: string) {
  const res = await shopifyFetch(getCollectionProductsQuery, {handle}, "no-cache");
  return reshapeData(res.data.collectionByHandle.products);
}
export async function getAllProducts(query: string) {
  const res = await shopifyFetch(getAllProductsQuery);
  return reshapeData(res.data.products);
}
export async function createCart(): Promise<Cart | undefined> {
  const res = await shopifyFetch(cartCreate);
  console.log(cartCreate)
  return res.data.cartCreate.cart;
}
export async function getCart(cartId: string): Promise<Cart | undefined> {
  const res = await shopifyFetch(getCartQuery, {cartId}, "no-store" );
  return res.data.cart;
  
}
export async function addCartLine(cartId: string, merchandiseId: string): Promise<Cart | undefined> {
  const res = await shopifyFetch(addCartLineQuery, {cartId, merchandiseId})
  console.log("this is the return value after adding some lines", res.data.cartLinesAdd.cart.lines.edges[0].node.merchandise)
  return res;
}