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
  id: Key | null | undefined;
  image: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  imgURL: string;
  title: string;
  price: number;
  colors: string[];
  width?: number;
  height?: number;
  oldPrice?: number;
  discount?: boolean;
  classeName?: string;
  brand?: string;
  model?: string;
  color?: string;
  factor?: string;
  technology?: string;
}
