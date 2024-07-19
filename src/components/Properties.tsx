import React from "react";
import { Status } from "./Status";
import { Priority } from "./Priority";
import { Labels } from "./Labels";

const Properties = () => {
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
        <div className="flex flex-col gap-1 text-xs">
          <h6>Due Date</h6>
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Properties;
