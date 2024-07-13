"use client";
import { useAppContext } from "@/context/AppContext";
import { messages } from "@/data/data";
import React from "react";

const Inbox = () => {
  const { setMessage } = useAppContext();

  return (
    <div className="flex w-96 flex-col gap-4 border-r border-border">
      <div className="flex h-10 w-full items-center border-b border-border px-4">
        Inbox
      </div>
      {messages.length === 0 ? (
        <div className=" flex-1 flex justify-center items-center text-grey text-sm font-medium">
          <h1>No task available</h1>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <div
              className="mx-2 flex items-center justify-between rounded p-2 hover:bg-hover"
              key={index}
              onClick={() => setMessage(message.id)}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bug text-xs uppercase">
                  {message.assigner.slice(0, 2)}
                </div>
                <div className="flex flex-col text-grey">
                  <div className="flex gap-2 text-sm">
                    <h1 className="uppercase">{message.code}</h1>
                    <h2 className="font-semibold">{message.task}</h2>
                  </div>
                  <h6 className="text-xs">{message.activity}</h6>
                </div>
              </div>
              <div className="text-xs text-grey">
                <span>4d</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
