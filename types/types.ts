export type productType = {
  id?: string;
  image: string;
  title: string;
  price: number;
  colors: string[];
  width?: number;
  height?: number;
  description?: string;
  images?: string[];
  oldPrice?: number;
  classeName?: string;
  discount?: boolean;
  cardWidth?: number;
  cardHeight?: number;
  type?: string;
  AllProducts?: productType[];
  color?: string | string[] | undefined;
};

export type categoriesType = {
  bestSelling: productType[];
  blackFriday: productType[];
};
export interface formType {
  email: string;
  password: string;
}
