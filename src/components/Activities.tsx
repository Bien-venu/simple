import React from "react";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { RiProgress1Line } from "react-icons/ri";

const Activities = ({ message }: any) => {
  const getIconClassName = (icon: any) => {
    switch (icon) {
      case MdSwapHorizontalCircle:
        return "text-grey";
      case RiProgress1Line:
        return "text-inprogress";
      default:
        return "";
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-base">Activity</h1>
        <div className="flex- flex">
          {message.worker.map(
            (worker: string | any[], index: React.Key | null | undefined) => (
              <div
                className="mr-[-10px] flex h-6 w-6 items-center justify-center rounded-full border border-bgGray bg-bug text-xs uppercase"
                key={index}
              >
                {worker.slice(0, 2)}
              </div>
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {message.move.map((activity: any, index: number) => {
          const IconComponent = activity.icon;
          return (
            <div key={index} className="flex items-center gap-4">
              <IconComponent
                size={20}
                className={getIconClassName(activity.icon)}
              />
              <div className="flex items-center gap-1 text-xs text-grey">
                <h1 className="text-white">{activity.creator}</h1>
                <p>{activity.message}</p>
                <span>.</span>
                <p>6 days ago</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
