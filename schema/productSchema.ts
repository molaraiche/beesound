import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, {
    message: "Title is required and must be at least 3 characters long",
  }),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .min(0.01, { message: "Price must be at least 0.01" }),
  colors: z
    .array(
      z
        .string()
        .regex(/^#([0-9A-F]{3}){1,2}$/i, { message: "Invalid hex color" })
    )
    .min(1, { message: "At least one color is required" }),
  images: z
    .array(z.string().min(1, { message: "Image path is required" }))
    .optional()
    .default([]),
  brand: z.string().min(3, {
    message: "Brand is required and must be at least 3 characters long",
  }),
  model: z.string().min(3, {
    message: "Model is required and must be at least 3 characters long",
  }),
  color: z.string().min(3, {
    message: "Color is required and must be at least 3 characters long",
  }),
  factor: z.string().min(3, {
    message: "Factor is required and must be at least 3 characters long",
  }),
  image: z.string().min(1, { message: "Main image path is required" }),
  technology: z.string().min(3, {
    message: "Technology is required and must be at least 3 characters long",
  }),
  oldPrice: z
    .number()
    .positive({ message: "Old Price must be a positive number" })
    .default(0),
  discount: z.boolean().optional(),
  type: z.enum(["Collection", "Arrivals", "Gamers"], {
    message: "Invalid product type",
  }),
});
