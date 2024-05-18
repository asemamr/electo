export type ImageT = {
  id: string;
  url: string;
};
export type Variant = {
  availableForSale: boolean,
  id: string
}
export type rawImages = {
  edges: [
    {
      node: ImageT;
    }
  ];
};
export type Images = ImageT[];

export type rawDataProduct = {
  id: string;
  images: rawImages | [];
  priceRange: {
    maxVariantPrice: {
      amount: string;
    };
  };
  productType: string;
  publishedAt: string;
  descriptionHtml: string;
  description: string;
  featuredImage: {
    url: string,
    altText: string
  }
  tags: string[] | [];
  title: string;
  options: [
    {
      name: string;
      values: string[];
    }
  ];
  variants: {
    edges: [
      {
      node: {
        availableForSale: boolean,
        id: string
      }}
    ]
  }
};
export type ProductType = Omit<rawDataProduct, "images" | "variants"> & {
  images: ImageT[];
  variants: Variant[];
};
export type rawDataProducts = {
  edges: rawDataProduct[];
};
export type CartLine = {
  id: string;
  merchandise: {
    id: string;
    title: string;
    product:rawDataProduct 
  };
};
export type Amount = {
  amount: number;
  currencyCode: string;
};

export type Cart =  {
    id: string;
    checkoutUrl: string
    createdAt: string;
    updatedAt: string;
    lines: {
      edges: [
        {
          node: CartLine;
        }
      ];
    };
    buyerIdentity: {
      deliveryAddressPreferences: [
        {
          __typename: string;
        }
      ];
    };
    attributes: [
      {
        key: string;
        value: string;
      }
    ];
    cost: {
      totalAmount: Amount;
      subtotalAmount: Amount;
      totalTaxAmount: Amount;
      totalDutyAmount: Amount;
    };
  };
