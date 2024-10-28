import { cn } from "@/lib-v2/utils"

function UzinLogo({className}: {className?: string}) {
  return (
    <div className={cn("w-full", className)}>
        <img src="/uu.png" alt="Uzin Logo" />
    </div>
  )
}

export default UzinLogo