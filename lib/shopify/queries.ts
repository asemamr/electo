// const getCollectionQuery = /* GraphQL */ `
//   query getCollectionProducts(
//     $handle: String!
//     $sortKey: ProductCollectionSortKeys
//     $reverse: Boolean
// ) {
//     collection(handle: $handle) {
//       products(sortKey: $sortKey, reverse: $reverse, first: 100) {
//         edges {
//           node {
//             ...product
//           }
//         }
//       }
//     }
//   }
//   fragment product on Product {
//     id
//     handle
//     availableForSale
//     title
//     description
//     descriptionHtml
//     options {
//       id
//       name
//       values
//     }
//     priceRange {
//       maxVariantPrice {
//         amount
//         currencyCode
//       }
//       minVariantPrice {
//         amount
//         currencyCode
//       }
//     }
//     variants(first: 250) {
//       edges {
//         node {
//           id
//           title
//           availableForSale
//           selectedOptions {
//             name
//             value
//           }
//           price {
//             amount
//             currencyCode
//           }
//         }
//       }
//     }
//     featuredImage {
//       ...image
//     }
//     images(first: 20) {
//       edges {
//         node {
//           ...image
//         }
//       }
//     }
//     seo {
//       ...seo
//     }
//     tags
//     updatedAt
//   }
//   fragment image on Image {
//     url
//     altText
//     width
//     height
//   }
//   fragment seo on SEO {
//     description
//     title
//   }
// `;

const fragmentProduct = `
fragment product on Product {
  title
  id
  handle
  images(first: 10) {
    edges {
      node {
        id
        url
      }
    }
  }
  descriptionHtml
  description
  priceRange {
    maxVariantPrice {
      amount
    }
  }
  productType
  featuredImage {
    url
    altText
  }
  publishedAt
  tags
  options {
    name
    values
  }
  variants(first: 10) {
    edges {
      node {
        id
        availableForSale
      }
    }
  }
}
`;

const fragmentCart = `
fragment cart on Cart {
      id
      checkoutUrl
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            merchandise {
                ... on ProductVariant {
                id
                title
                selectedOptions {
                  name
                  value
                }
                product {
                  ...product
                }
              }
            } 
          }
        }
      }
      buyerIdentity {
        deliveryAddressPreferences {
          __typename
        }
      }
      attributes {
        key
        value
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
    
  }${fragmentProduct}`;
export const getCollectionQuery = `{products(first: 10) {
    edges {
      node {
        collections(first: 3) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }}`;

export const getProductsQuery = `	products(first:5) {
    edges {
      node {
        id
        title
      }
    }
  }`;

export const getAllProductsQuery = `{
  products(first: 100) {
    edges {
      node {
        ...product
      }
    }
  }
}${fragmentProduct}`;

export const getProductQuery = `
query MyQuery($id: ID!) {
  product(id: $id) {
    ...product
  }
}${fragmentProduct}`;

// query MyQuery {
//   product(id: "1234") {
//     handle
//     id
//   }
// }
export const getCollectionProductsQuery = `
query MyQuery($handle: String!) {
  collectionByHandle(handle: $handle) {
    products(first: 10) {
      edges {
        node {
          ...product
        }
      }
    }
  }
}${fragmentProduct}
`;

export const cartCreate = `
mutation cartCreate {
  cartCreate{
    cart {
    ...cart
    }
  }
}${fragmentCart}`;

export const getCartQuery = `
query getCart($cartId: ID!) {
  cart(
    id:$cartId
  ) {
    ...cart
  }
}${fragmentCart}`;
        
export const addCartLineQuery = `
mutation addCartLine($cartId: ID!, $merchandiseId: ID!) {
  cartLinesAdd(cartId: $cartId,lines: {merchandiseId: $merchandiseId, quantity: 1}) {
    cart {
      ...cart
    }
  }
}${fragmentCart}`