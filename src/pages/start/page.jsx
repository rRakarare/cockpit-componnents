import CardGrid from "./_components/card-grid";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

function Page() {
  return (
    <div className={"container mt-28 flex flex-col space-y-20"}>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] ",
        )}
      />
      <div className="space-y-5">
      <h2 className="text-6xl font-bold">Hallo Morty</h2>
      <h2 className="text-6xl font-bold">Wo soll die Reise heute hingehen?</h2>
      </div>
      <CardGrid />
    </div>
  );
}

export default Page;
