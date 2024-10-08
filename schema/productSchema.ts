import { z } from "zod";

export const productSchema = z
  .object({
    title: z.string().min(3, {
      message: "Title is required and must be at least 3 characters long",
    }),
    description: z
      .string()
      .min(5, { message: "Description must contain at least 5 words" })
      .max(100, { message: "Description cannot exceed 100 words" }),
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
      .nonnegative({ message: "Old Price must be zero or a positive number" })
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
  })

  .refine(
    (data) => {
      if (data.discount) {
        return data.oldPrice > data.price;
      }
      return true;
    },
    {
      message: "Old Price must be greater than Price when Discount is applied.",
      path: ["oldPrice"],
    }
  );
