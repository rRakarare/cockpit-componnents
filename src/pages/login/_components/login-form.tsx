import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components-v2/ui/button";
import TextInput from "@/components-v2/ui/formhelper/text-input";
import PasswordInput from "@/components-v2/ui/formhelper/password-input";
import { Form } from "@/components-v2/ui/form";
import { useLoginMutation } from "@/redux-rtk-v2/features/auth/authApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
 
const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

function LoginForm() {

  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useSelector((state: { auth: { isAuthenticated: boolean } }) => state.auth);
  const from = location.state?.from.pathname || "/";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate(from);
      }, 2000);
    }
  }, [isSuccess, navigate, from]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(from);
    }
  }, [auth.isAuthenticated, from, navigate])
  

  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <TextInput form={form} formSchema={formSchema} name="email" label="Username" placeholder="Username" />
        <PasswordInput form={form} formSchema={formSchema} name="password" label="Password" placeholder="Password" />
        <Button disabled={isLoading} className="!mt-8 w-full" type="submit">{isLoading && <LoaderCircle className="animate-spin mr-2" />} Login</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
