"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Calendars() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full rounded border border-border justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          {date ? (
            format(date, "PPP")
          ) : (
            <div className="text-gray h-full w-full overflow-hidden">
              Pick a date*
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="z-50 flex bg-background w-auto flex-col space-y-2 p-2"
      >
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
