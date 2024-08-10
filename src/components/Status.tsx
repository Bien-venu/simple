'use client'

import * as React from "react";
import { ArrowUpCircle, CheckCircle2, Circle, HelpCircle } from "lucide-react";
import {
  RiProgress1Line,
  RiProgress8Line,
  RiProgress6Line,
  RiProgress7Line,
  RiProgress4Line,
} from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";

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
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: RiProgress1Line,
  },
  {
    value: "halfly done",
    label: "Halfly Done",
    icon: RiProgress4Line,
  },
  {
    value: "conflict",
    label: "Conflict",
    icon: RiProgress6Line,
  },
  {
    value: "complete",
    label: "Completed",
    icon: RiProgress7Line,
  },
  {
    value: "review",
    label: "In Review",
    icon: RiProgress7Line,
  },
  {
    value: "done",
    label: "Done",
    icon: RiProgress8Line,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: IoIosCloseCircle,
  },
];

const Status = ({ a }: { a: { status: string } }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    statuses.find((status) => status.value === a.status.toLowerCase()) || statuses[0], // Default to first status if not found
  );

  React.useEffect(() => {
    setSelectedStatus(
      statuses.find((status) => status.value === a.status.toLowerCase()) ||
        statuses[0], // Default to first status if not found
    );
  }, [a.status]); // Update when a.status changes

  const getIconClassName = (icon: IconType) => {
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
                        statuses.find((status) => status.value === value) ||
                          statuses[0], // Default to first status if not found
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
};

export default Status;
