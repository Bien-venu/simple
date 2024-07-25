import React from "react";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { RiProgress1Line } from "react-icons/ri";

const iconMapping: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  MdSwapHorizontalCircle,
  RiProgress1Line,
  // Add other mappings here
};

function getIconComponent(
  iconName: string,
): React.ComponentType<React.SVGProps<SVGSVGElement>> | null {
  return iconMapping[iconName] || null;
}

const Activities = ({ message }: any) => {
  const getIconClassName = (iconName: string) => {
    switch (iconName) {
      case "MdSwapHorizontalCircle":
        return "text-grey";
      case "RiProgress1Line":
        return "text-inprogress";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-base">Activity</h1>
        <div className="flex">
          <div className="mr-[-10px] flex h-6 w-6 items-center justify-center rounded-full border border-bgGray bg-bug text-xs uppercase">
            {message.worker.slice(0, 2)}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {message.activities.map((activity: any, index: number) => {
          const IconComponent = getIconComponent(activity.icon);
          return (
            <div key={index} className="flex items-center gap-4">
              {IconComponent ? (
                <IconComponent
                 
                  className={getIconClassName(activity.icon + ' w-4 h-4')}
                />
              ) : null}
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
