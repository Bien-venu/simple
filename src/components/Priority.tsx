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
import { RxDotsHorizontal } from "react-icons/rx";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { BiSignal2 } from "react-icons/bi";
import { BiSignal3 } from "react-icons/bi";
import { BiSignal4 } from "react-icons/bi";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Status = {
  value: string;
  label: string;
  icon: IconType;
};

const statuses: Status[] = [
  {
    value: "no priority",
    label: "No priority",
    icon: RxDotsHorizontal,
  },
  {
    value: "urgent",
    label: "Urgent",
    icon: BsFillExclamationSquareFill,
  },
  {
    value: "high",
    label: "High",
    icon: BiSignal4,
  },
  {
    value: "medium",
    label: "Medium",
    icon: BiSignal3,
  },
  {
    value: "low",
    label: "Low",
    icon: BiSignal2,
  },
];

export function Priority() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null,
  );

 
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
                <selectedStatus.icon className={`mr-2 h-4 w-4 shrink-0`} />
                {selectedStatus.label}
              </>
            ) : (
              <>
                <RxDotsHorizontal className={`mr-2 h-4 w-4 shrink-0`} />
                No priority
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="border border-border p-0"
          side="right"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Change priority..." />
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
