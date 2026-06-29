import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  type DefaultValues,
  type FieldValues,
  type SubmitHandler,
  type UseFormProps,
  type UseFormReturn,
} from "react-hook-form";
import type { ZodTypeAny } from "zod";

export interface UseValidatedFormOptions<TFieldValues extends FieldValues> {
  schema: ZodTypeAny;
  defaultValues?: DefaultValues<TFieldValues>;
  mode?: UseFormProps<TFieldValues>["mode"];
  reValidateMode?: UseFormProps<TFieldValues>["reValidateMode"];
}

export function useValidatedForm<TFieldValues extends FieldValues>({
  schema,
  defaultValues,
  mode = "onTouched",
  reValidateMode = "onChange",
}: UseValidatedFormOptions<TFieldValues>): UseFormReturn<TFieldValues> {
  return useForm<TFieldValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode,
    reValidateMode,
  });
}

export type { SubmitHandler };
