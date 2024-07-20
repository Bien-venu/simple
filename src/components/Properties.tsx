import React from "react";
import { Status } from "./Status";
import { Priority } from "./Priority";
import { Labels } from "./Labels";
import { BsCalendar2Event } from "react-icons/bs";
import { BsCalendar2X } from "react-icons/bs";

const Properties = ({ data }: any) => {
  return (
    <div className="flex h-full w-80 flex-col gap-4 bg-account p-4">
      <div>
        <h1>Properties</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Status />
        <Priority />
        <div className="flex flex-col gap-1 text-xs">
          <h6>Labels</h6>
          <Labels />
        </div>
        <div className="flex flex-col gap-2 text-xs">
          <h6>Due Date</h6>
          <div className="text- flex items-center gap-3 text-sm">
            <BsCalendar2X size={15} className="text-bug" />
            {data.map(
              (
                data: {
                  date:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined,
              ) => (
                <span key={index} className="">
                  {data.date}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
