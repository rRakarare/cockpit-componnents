
import CockpitLogo from "@/layout/logo";
import LoginForm from "./login-form";



function LoginScreen() {
  return (
    <div className="w-full flex min-h-[300px]" style={{ height: "100dvh" }}>
      <div className="bg-accent-foreground w-[50%] p-14 lg:block hidden">
        <div className="flex flex-col h-full justify-between ">
          <div className="flex items-center justify-center space-x-6">
            <CockpitLogo className="w-48 fill-background" />
            <h2 className="text-4xl text-background">KI-Cockpit</h2>
          </div>
          <p className="text-xl text-accent">
            Realisieren Sie Ihre KI-Visionen sicher und effizient. Unser KI
            Cockpit bietet Ihnen einen einfachen und datenschutzkonformen Zugang
            zu verschiedenen KI-Sprachmodellen. Sparen Sie Zeit und Ressourcen
            mit unserer benutzerfreundlichen Prompt-Datenbank, in der Sie Ihre
            Use Cases intern speichern, austauschen und optimieren können.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col h-full space-y-4 justify-center items-center px-3">
        <CockpitLogo className="w-40 block lg:hidden" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Login
        </h1>
        <p className="leading-7 my-6">E-Mail and Passwort eingeben</p>
        <div className="max-w-[400px] w-full ">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginScreen