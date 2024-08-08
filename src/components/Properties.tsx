import { Priority } from "./Priority";
import { Labels } from "./Labels";
import { BsCalendar2Event } from "react-icons/bs";
import { BsCalendar2X } from "react-icons/bs";
import Status from "./Status";

const Properties = ({ a }: any) => {
  return (
    <div className="flex h-full w-80 flex-col gap-4 bg-account p-4">
      <div>
        <h1>Properties</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Status a={a} />
        <Priority a={a} />
        <div className="flex flex-col gap-1 text-xs">
          <h6>Labels</h6>
          <Labels a={a} />
        </div>
        <div className="flex flex-col gap-2 text-xs">
          <h6>Due Date</h6>
          <div className="text- flex items-center gap-3 text-sm">
            {a.date ? (
              <BsCalendar2Event size={15} className="text-improvement" />
            ) : (
              <BsCalendar2X size={15} className="text-bug" />
            )}
            <span className="">{a.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
