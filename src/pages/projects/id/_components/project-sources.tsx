import { Button } from "@/components-v2/ui/button";
import { ProjectType } from "@/config-v2/project/project-type";
import { Ellipsis, File } from "lucide-react";

function ProjectSources({ sources }: Pick<ProjectType, "sources">) {
  if (sources.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-48 border rounded-xl p-4">
        <div className="p-1 border rounded-lg">
          <File className="size-4" />
        </div>
        <p className="font-bold">Keine Dateien hinzugefügt</p>
        <p className="text-muted-foreground">
          Drag and drop files here, or upload a source.
        </p>
        <Button variant={"outline"} className="mt-5">
          Hinzufügen
        </Button>
      </div>
    );
  }

  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="py-2 px-4 flex items-center space-x-3">
        <div>
          <p className="font-semibold text-lg">Quellen</p>
          <p className="text-muted-foreground text-sm">
            Add files this project should reference when generating responses.
          </p>
        </div>
        <Button variant={"outline"}>Hinzufügen</Button>
      </div>
      <div className="border-t flex flex-col">
        {sources.map((source) => (
          <div
            key={source.id}
            className="w-full flex items-center space-x-3 py-4 px-4 border-b last:border-none"
          >
            <div className="p-1 border rounded-lg">
              <File className="size-4" />
            </div>
            <div className="flex-1">
              <div>{source.fileName}</div>
              <div className="text-muted-foreground text-sm">
                {source.fileSize} kB
              </div>
            </div>
            <Button size={"icon"} variant={"outline"}><Ellipsis className="size-4"/></Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSources;
