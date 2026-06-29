import type { z } from "zod";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface BaseFormState {
  status: FormStatus;
  errorMessage?: string;
}

export type ZodInfer<TSchema extends z.ZodTypeAny> = z.infer<TSchema>;
