export type productType = {
  id: string;
  image: string;
  title: string;
  price: number;
  colors: string[];
  width?: number;
  height?: number;
  brand?: string;
  model?: string;
  color?: string;
  factor?: string;
  technology?: string;
  images?: string[];
  oldPrice?: number;
  classeName?: string;
  discount?: boolean;
};

export type categoriesType = {
  bestSelling: productType[];
  blackFriday: productType[];
};
