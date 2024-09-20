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

interface TextInputProps<F extends ZodSchema> {
  form: UseFormReturn<z.infer<F>>;
  formSchema: F;
  name: Path<z.infer<F>>;
  label?: string;
  placeholder?: string;
  description?: string;
}

function TextInput<F extends ZodSchema>({
  form,
  name,
  label,
  placeholder,
  description,
}: TextInputProps<F>) {
  return (
    <FormField
      control={form.control}
      name={name} // Properly type the name prop
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextInput;
