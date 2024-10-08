import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, {
    message: "Title is required and must be at least 3 characters long",
  }),
  description: z.string().min(30, {
    message: "Description is required and must be at least 30 characters long",
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
  image: z.string().min(1, { message: "Main image path is required" }),
  oldPrice: z
    .number()
    .positive({ message: "Old Price must be a positive number" })
    .default(0),
  discount: z.boolean().optional(),
  type: z.enum(
    [
      "Collection",
      "Arrivals",
      "Gamers",
      "Discount",
      "BestSelling",
      "NewArrivals",
    ],
    {
      message: "Invalid product type",
    }
  ),
});

export const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
