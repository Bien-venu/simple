"use client";
import { useAppContext } from "@/context/AppContext";
import { messages } from "@/data/data";
import React from "react";

const Inbox = () => {
  const { message, setMessage } = useAppContext();

  return (
    <div className="flex w-96 flex-col gap-4 border-r border-border">
      <div className="flex h-10 w-full items-center border-b border-border px-4">
        Inbox
      </div>
      {messages.length === 0 ? (
        <div className="flex flex-1 items-center justify-center text-sm font-medium text-grey">
          <h1>No task available</h1>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.map((m, index) => (
            <div
              className={` ${message === m.id && "bg-hover"} mx-2 flex items-center justify-between rounded p-2 hover:bg-hover`}
              key={index}
              onClick={() => setMessage(m.id)}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bug text-xs uppercase">
                  {m.assigner.slice(0, 2)}
                </div>
                <div className="flex flex-col text-grey">
                  <div className="flex gap-2 text-sm">
                    <h1 className="font-medium uppercase">{m.team}</h1>
                    <h2 className="font-semibold">{m.task}</h2>
                  </div>
                  <h6 className="text-xs font-medium">
                    {m.assigner} assigned to you
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
