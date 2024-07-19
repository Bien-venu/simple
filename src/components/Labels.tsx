"use client";

import * as React from "react";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  XCircle,
} from "lucide-react";
import { RiProgress1Line } from "react-icons/ri";
import { RiProgress8Line } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { RiProgress6Line } from "react-icons/ri";
import { RiProgress7Line } from "react-icons/ri";
import { RiProgress4Line } from "react-icons/ri";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Status = {
  value: string;
  label: string;
  icon: IconType;
};

const statuses: Status[] = [
  {
    value: "improvement",
    label: "Improvement",
    icon: HelpCircle,
  },
  {
    value: "bug",
    label: "Bug",
    icon: Circle,
  },
  {
    value: "feature",
    label: "Feature",
    icon: RiProgress1Line,
  },
];

export function Labels() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null,
  );

  const getIconClassName = (icon: any) => {
    switch (icon) {
      case RiProgress8Line:
        return "text-done";
      case RiProgress6Line:
        return "text-bug";
      case RiProgress1Line:
        return "text-inprogress";
      case RiProgress4Line:
        return "text-inprogress";
      case RiProgress7Line:
        return "text-improvement";
      default:
        return "";
    }
  };

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            className="w-[150px] justify-start border border-border bg-account hover:bg-hover"
          >
            {selectedStatus ? (
              <>
                <selectedStatus.icon
                  className={`${getIconClassName(selectedStatus.icon)} mr-2 h-4 w-4 shrink-0`}
                />
                {selectedStatus.label}
              </>
            ) : (
              <>
                <Circle className={`mr-2 h-4 w-4 shrink-0`} />
                Todo
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    className="hover:bg-hover"
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                          null,
                      );
                      setOpen(false);
                    }}
                  >
                    <status.icon
                      className={cn(
                        getIconClassName(status.icon),
                        "mr-2 h-4 w-4",
                        status.value === selectedStatus?.value
                          ? "opacity-100"
                          : "opacity-100",
                      )}
                    />
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
