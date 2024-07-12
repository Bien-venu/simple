import { messages } from "@/data/data";
import React from "react";

const Inbox = () => {
  return (
    <div className="flex w-96 flex-col gap-4 border-r border-border">
      <div className="flex h-10 w-full items-center border-b border-border px-4">
        Inbox
      </div>
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <div
            className="mx-2 flex items-center justify-between rounded p-2 hover:bg-hover"
            key={index}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bug text-xs uppercase">
                kn
              </div>
              <div className="flex flex-col text-grey">
                <div className="flex gap-2 text-sm">
                  <h1 className=" uppercase">{message.name}</h1>
                  <h2 className=" font-semibold">{message.task}</h2>
                </div>
                <h6 className="text-xs">{message.activity}</h6>
              </div>
            </div>
            <div className="text-grey">
              <span>4d</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
