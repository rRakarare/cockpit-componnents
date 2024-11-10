import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components-v2/ui/button";
import TextInput from "@/components-v2/ui/formhelper/text-input";
import SwitchInput from "@/components-v2/ui/formhelper/switch-input";
import { Form } from "@/components-v2/ui/form";
import TextAreaInput from "@/components-v2/ui/formhelper/text-area-input";
import { iconColorSchema, iconNameSchema } from "@/types/icons";
import { getIcon } from "@/config-v2/icons/icon-map";
import SelectIconInput from "./select-icon-input";
import SelectColorInput from "./select-color-input";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name darf nicht leer sein",
  }),
  isPublic: z.boolean(),
  prompt: z.string().min(1, {
    message: "Prompt darf nicht leer sein",
  }),
  description: z.string().min(1, {
    message: "Beschreibung darf nicht leer sein",
  }),
  icon: iconNameSchema,
  color: iconColorSchema,
});

const iconOptions = iconNameSchema.options.map((icon) => ({
  value: icon,
  label: getIcon({ iconName: icon }),
}));

const colorOptions = iconColorSchema.options.map((color) => ({
  value: color,
  label: (
    <div
      className="size-6 rounded-lg"
      style={{ background: color }}
    ></div>
  ),
}));

function CreatePromptForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      isPublic: false,
      prompt: "",
      description: "",
      icon: iconOptions[0].value,
      color: colorOptions[0].value,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SwitchInput
          form={form}
          formSchema={formSchema}
          name="isPublic"
          label="Öffentlich"
          description="Einschalten um Prompt öffentlich verfügbar zu machen"
        />
        <div className="flex space-x-2">
          <TextInput
            className="flex-1"
            form={form}
            formSchema={formSchema}
            name="name"
            label="Name"
            placeholder="Name"
          />

          <SelectIconInput
            form={form}
            formSchema={formSchema}
            name="icon"
            label="Icon"
            options={iconOptions}
            placeholder="Icon auswählen"
          />
          <SelectColorInput
            form={form}
            formSchema={formSchema}
            name="color"
            label="Farbe"
            options={colorOptions}
            placeholder="Farbe auswählen"
          />
        </div>
        <TextAreaInput
          form={form}
          formSchema={formSchema}
          name="prompt"
          label="Prompt"
          placeholder="Systemanweisung eingeben"
        />

        <TextAreaInput
          form={form}
          formSchema={formSchema}
          name="description"
          label="Beschreibung"
          placeholder="Beschreibung hinzufügen"
        />
        <Button type="submit">Erstellen</Button>
      </form>
    </Form>
  );
}

export default CreatePromptForm;
