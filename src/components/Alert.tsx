import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendars } from "./Calendar";
import { StatusxDemo } from "./StatusxDemo";
import { PriorityDemo } from "./PriorityDemo";
import { LabelsDemo } from "./LabelsDemo";

export function Alert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={17}
          height={17}
          fill={"none"}
          className="cursor-pointer"
        >
          <path
            d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a task</AlertDialogTitle>
          <AlertDialogDescription>
            <form className="mt-4 flex w-full gap-4 text-xs">
              <div className="flex w-full flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter the name of the task"
                    className="rounded border border-border bg-background p-3 font-thin placeholder:font-thin"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="Task">Email</label>
                  <input
                    id="Task"
                    type="email"
                    placeholder="Enter the worker email "
                    className="rounded border border-border bg-background p-3"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="Team">Team</label>
                  <input
                    id="Team"
                    type="text"
                    placeholder="Enter the team"
                    className="rounded border border-border bg-background p-3"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="Task">Task</label>
                  <input
                    id="Task"
                    type="text"
                    placeholder="Enter the task"
                    className="rounded border border-border bg-background p-3"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="status">Status</label>
                  <StatusxDemo />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="priority">Priority</label>
                  <PriorityDemo />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="labels">Labels</label>
                  <LabelsDemo />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="Date">Duel Date</label>
                  <Calendars />
                </div>
                <div className="flex h-full flex-col gap-1">
                  <label htmlFor="about">About</label>
                  <textarea
                    name="about"
                    id="about"
                    placeholder="Enter the task about "
                    className="h-full rounded border border-border bg-background p-3"
                  ></textarea>
                </div>
              </div>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Create</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
