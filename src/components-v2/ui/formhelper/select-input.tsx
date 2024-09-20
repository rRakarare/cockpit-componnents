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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { ReactElement } from "react";

interface OptionType {
  value: string;
  label: string | ReactElement;
}

interface SelectInputProps<F extends ZodSchema> {
  form: UseFormReturn<z.infer<F>>;
  formSchema: F;
  name: Path<z.infer<F>>;
  options: OptionType[];
  label?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
}

function SelectInput<F extends ZodSchema>({
  form,
  name,
  options,
  label,
  placeholder,
  description,
  disabled = false,
}: SelectInputProps<F>) {
  return (
    <FormField
      control={form.control}
      name={name} // Properly type the name prop
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select
            disabled={disabled}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SelectInput;
