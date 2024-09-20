import { z, ZodSchema } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Path, UseFormReturn } from "react-hook-form";
import { Textarea } from "../textarea";

interface TextAreaInputProps<F extends ZodSchema> {
  form: UseFormReturn<z.infer<F>>;
  formSchema: F;
  name: Path<z.infer<F>>;
  label?: string;
  placeholder?: string;
  description?: string;
}

function TextAreaInput<F extends ZodSchema>({
  form,
  name,
  label,
  placeholder,
  description,
}: TextAreaInputProps<F>) {
  return (
    <FormField
      control={form.control}
      name={name} // Properly type the name prop
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextAreaInput;
