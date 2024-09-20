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
import { Switch } from "../switch";

interface SwitchInputProps<F extends ZodSchema> {
  form: UseFormReturn<z.infer<F>>;
  formSchema: F;
  name: Path<z.infer<F>>;
  label?: string;
  description?: string;
}

function SwitchInput<F extends ZodSchema>({
  form,
  name,
  label,
  description,
}: SwitchInputProps<F>) {
  return (
    <FormField
    control={form.control}
    name={name} // Properly type the name prop
    render={({ field }) => (
      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
        {label && <FormLabel>{label}</FormLabel>}
        {description && <FormDescription>{description}</FormDescription>}
        </div>
        <FormControl>
          <Switch
            className="!m-0"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  );
}

export default SwitchInput;
