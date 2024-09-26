export type productType = {
  id: number;
  image: string;
  title: string;
  price: number;
  colors: string[];
  width?: number;
  height?: number;
  oldPrice?: number;
};

export type categoriesType = {
  bestSelling: productType[];
  blackFriday: productType[];
};

export interface cardType {
  imgURL: string;
  title: string;
  price: number;
  colors: string[];
  width?: number;
  height?: number;
  oldPrice?: number;
  discount?: boolean;
  classeName?: string;
}
