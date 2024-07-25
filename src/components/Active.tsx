import React from "react";
import MainHeader from "./MainHeader";
import { messages } from "@/data/data";
import IssuesCard from "./IssuesCard";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  LucideProps,
  XCircle,
} from "lucide-react";
import { RiProgress1Line } from "react-icons/ri";
import { RiProgress8Line } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { RiProgress6Line } from "react-icons/ri";
import { RiProgress7Line } from "react-icons/ri";
import { RiProgress4Line } from "react-icons/ri";
import { IconType } from "react-icons";

const statuses = [
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

const getIconClassName = (
  icon:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | IconType,
) => {
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
const Active = () => {
  const message = messages.filter(
    (message) => message.status != "backlog" && message.status != "canceled",
  );

  const status = statuses.filter(
    (status) => status.value != "backlog" && status.value != "canceled",
  );
  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full flex-col gap-4 overflow-auto rounded border border-border bg-bgGray">
        <h1 className="border-b border-border p-2 px-8">Active</h1>
        <div className="flex flex-col">
          {status
            .filter((stat) => messages.some((m) => m.status === stat.value))
            .map((stat, index) => (
              <div key={index} className="flex flex-col pb-1">
                <div className="flex items-center gap-2 border-y border-border p-2 px-8 text-sm">
                  <stat.icon
                    className={getIconClassName(stat.icon) + ` h-4 w-4`}
                  />
                  <h1>{stat.label}</h1>
                </div>
                <div>
                  {message.map((m) => (
                    <>
                      {m.status === stat.value && (
                        <IssuesCard key={m} data={m} />
                      )}
                    </>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Active;
