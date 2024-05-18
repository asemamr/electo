import { endpoint, key } from ".";

export async function shopifyFetch(
  query: string,
  handle: string = "Hydrogen",
  id?: string
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
          handle,
          id,
          sortKey: "CREATED",
          reverse: false,
        },
      }),
      cache: "force-cache",
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
