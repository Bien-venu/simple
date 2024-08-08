import MainHeader from "./MainHeader";
import { messages } from "@/data/data";
import IssuesCard from "./IssuesCard";
import { HelpCircle, Circle, LucideIcon, LucideProps } from "lucide-react";
import {
  RiProgress1Line,
  RiProgress4Line,
  RiProgress6Line,
  RiProgress7Line,
  RiProgress8Line,
} from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";

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

const getIconClassName = (icon: React.ElementType<LucideProps>) => {
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

const Tasks = () => {
  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full flex-col gap-4 overflow-auto rounded border border-border bg-bgGray">
        <h1 className="border-b border-border p-2 px-8">Tasks</h1>

        <div className="flex flex-col">
          {statuses
            .filter((stat) => messages.some((m) => m.status === stat.value))
            .map((stat, index) => (
              <div key={index} className="flex flex-col pb-1">
                <div className="flex items-center gap-2 border-y border-border p-2 px-8 text-sm">
                  <stat.icon
                    className={`${getIconClassName(stat.icon)} h-4 w-4`}
                  />
                  <h1>{stat.label}</h1>
                </div>
                <div>
                  {messages
                    .filter((m) => m.status === stat.value)
                    .map((m, idx) => (
                      <IssuesCard key={idx} data={m} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
