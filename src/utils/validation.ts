import { z } from "zod";

export const phoneSchema = z.string().min(10).max(15);
export const emailSchema = z.string().email().optional().or(z.literal(""));

export const leadSchema = z.object({
  fullName: z.string().min(2),
  phoneNumber: phoneSchema,
  email: emailSchema,
  message: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
