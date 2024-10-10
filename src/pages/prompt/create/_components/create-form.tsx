import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components-v2/ui/button"
import TextInput from "@/components-v2/ui/formhelper/text-input"
import SwitchInput from "@/components-v2/ui/formhelper/switch-input"
import { Form } from "@/components-v2/ui/form"
import TextAreaInput from "@/components-v2/ui/formhelper/text-area-input"

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
  })

function CreatePromptForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          isPublic: false,
          prompt: "",
          description: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }


  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <SwitchInput form={form} formSchema={formSchema} name="isPublic" label="Öffentlich" description="Einschalten um Prompt öffentlich verfügbar zu machen" />
      <TextInput form={form} formSchema={formSchema} name="name" label="Name" placeholder="Name" />
      <TextAreaInput form={form} formSchema={formSchema} name="prompt" label="Prompt" placeholder="Systemanweisung eingeben" />
      <TextAreaInput form={form} formSchema={formSchema} name="description" label="Beschreibung" placeholder="Beschreibung hinzufügen" />
      <Button type="submit">Erstellen</Button>
    </form>
  </Form>
  )
}

export default CreatePromptForm