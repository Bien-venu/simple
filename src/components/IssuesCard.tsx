import React from "react";
import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";
import { BsCalendar2X, BsFillExclamationSquareFill } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";
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
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const priorities = [
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

const labels = [
  {
    value: "improvement",
    label: "Improvement",
    icon: FaCircle,
  },
  {
    value: "bug",
    label: "Bug",
    icon: FaCircle,
  },
  {
    value: "feature",
    label: "Feature",
    icon: FaCircle,
  },
];

const IssuesCard = ({ data }: any) => {
  // Find the status object that matches the data.priority value
  const priority = priorities.find(
    (priority) => priority.value === data.priority,
  );
  const status = statuses.find((status) => status.value === data.status);
  const label = labels.find((label) => label.value === data.labels);

  return (
    <div className="flex h-fit w-full items-center justify-between border-y border-border p-2 px-8 text-xs font-semibold">
      <div className="flex items-end gap-1">
        {priority && <priority.icon size={20} className=" text-grey h-fit" />}
        <h2 className=" text-grey">{data.code}</h2>
        {status && <status.icon size={15} />}
        <h2>{data.task}</h2>
        <div className="flex items-end text-grey">
          <MdKeyboardArrowRight size={20} />
          {data.name}
        </div>
      </div>
      <div className="flex gap-2 text-grey">
        <div className="flex items-center justify-center rounded-xl border border-border px-2">
          {label && (
            <label.icon
              className={`${label.value === "improvement" && "text-improvement"} ${label.value === "bug" && "text-bug"} ${label.value === "feature" && "text-feature"} mr-2 h-2 w-2`}
            />
          )}
          {data.labels}
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-border px-2">
          <BsCalendar2X size={15} className="text-bug" />
          {data.date}
        </div>
        <div className="mr-[-10px] flex h-6 w-6 items-center justify-center rounded-full bg-bug uppercase text-white">
          {data.assigner.slice(0, 2)}
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;
