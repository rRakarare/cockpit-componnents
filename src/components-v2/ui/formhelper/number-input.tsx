import { z, ZodSchema } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { Path, UseFormReturn } from "react-hook-form";

interface NumberInputProps<F extends ZodSchema> {
  form: UseFormReturn<z.infer<F>>;
  formSchema: F;
  name: Path<z.infer<F>>;
  label?: string;
  placeholder?: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
}

function NumberInput<F extends ZodSchema>({
  form,
  name,
  label,
  placeholder,
  description,
  min,
  max,
  step,
}: NumberInputProps<F>) {
  return (
    <FormField
      control={form.control}
      name={name} // Properly type the name prop
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input type="number" min={min} max={max} step={step} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default NumberInput;
