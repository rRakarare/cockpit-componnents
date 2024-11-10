import { z, ZodSchema } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components-v2/ui/form";
import { Path, UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components-v2/ui/select";
import { ReactElement } from "react";

interface OptionType {
  value: string;
  label: string | ReactElement;
}

interface InputProps<F extends ZodSchema> {
  form: UseFormReturn<z.infer<F>>;
  formSchema: F;
  name: Path<z.infer<F>>;
  options: OptionType[];
  label?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
}

function SelectColorInput<F extends ZodSchema>({
  form,
  name,
  options,
  label,
  placeholder,
  description,
  disabled = false,
}: InputProps<F>) {
  return (
    <FormField
      control={form.control}
      name={name} // Properly type the name prop
      render={({ field }) => (
        <FormItem className="w-fit">
          {label && <FormLabel>{label}</FormLabel>}
          <Select
          
            disabled={disabled}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger isArrow={false}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="max-w-full">
              <div className="grid grid-cols-4 gap-4 p-2">
              {options.map((option) => (
                <SelectItem isCheck={false} className="p-3 w-fit cursor-pointer" key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
              </div>
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SelectColorInput;
