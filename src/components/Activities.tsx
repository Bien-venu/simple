import React from "react";

const Activities = ({ message }: any) => {
  return (
    <div>
      <div className="flex justify-between items-center">
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
      <div className="flex">
        
      </div>
    </div>
  );
};

export default Activities;
