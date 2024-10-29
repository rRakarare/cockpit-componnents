import * as React from "react";
import { Check, Filter } from "lucide-react";

import { Button } from "@/components-v2/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components-v2/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components-v2/ui/popover";
import { cn } from "@/lib-v2/utils";



interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

interface Group {
  label?: string;
  name: string;
  options: Option[];
}

interface GroupValue {
  name: string;
  value: string[] | string | null | undefined;
}

interface PromptInputFilterProps {
  label: string;
  emptyPhrase?: string;
  enableSearch?: boolean;
  groupValues: GroupValue[] | null | undefined;
  groups: Group[];
}

function FilterMany({
  label,
  emptyPhrase,
  groups,
  groupValues,
  enableSearch,
}: PromptInputFilterProps) {
  const [open, setOpen] = React.useState(false);

  const value = groupValues?.map((g) => g.value).flat().filter(v => v !== null && v !== undefined);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
        >
          {label}
          <div className="flex ml-2 space-x-2">
            {(value?.length ?? 0) >= 3 ? (
              <div className="border py-1 px-2 rounded-lg">
                {value?.length} ausgewählt
              </div>
            ) : (
              value?.map((v) => (
                <div key={v} className="border py-1 px-2 rounded-lg">
                  {v}
                </div>
              ))
            )}
          </div>
          <Filter className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          {enableSearch && <CommandInput placeholder="Suchen ..." />}
          <CommandList>
            <CommandEmpty>{emptyPhrase}</CommandEmpty>
            {groups.map((group,i) => (
              <CommandGroup key={i} className="border-b last:border-none" >
                {group.options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => option.onClick()}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value?.includes(option.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.icon}
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default FilterMany;
