import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Title is required"),
  price: z.number().positive("Price must be positive"),
  colors: z
    .array(z.string().regex(/^#([0-9A-F]{3}){1,2}$/i, "Invalid hex color"))
    .min(1, "At least one color is required"),
  images: z
    .array(z.string().url("Invalid image URL"))
    .min(1, "At least one image is required"),
  brand: z.string().min(3, "Brand is required"),
  model: z.string().min(3, "Model is required"),
  color: z.string().min(3, "Color is required"),
  factor: z.string().min(3, "Factor is required"),
  image: z.string().min(1, "Main image is required"),
  technology: z.string().min(3, "Technology is required"),
  oldPrice: z
    .number()
    .positive("Old Price must be a positive number")
    .optional(),
  discount: z.boolean().optional(),
  type: z.enum([
    "electronics",
    "furniture",
    "clothing",
    "gamer",
    "accessories",
  ]),
});
