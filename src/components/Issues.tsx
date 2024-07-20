import React from "react";
import MainHeader from "./MainHeader";
import { messages } from "@/data/data";
import IssuesCard from "./IssuesCard";

const Issues = () => {
  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full rounded border border-border bg-bgGray">
        {messages.map((m, index) => (
          <IssuesCard key={index} data={m} />
        ))}
      </div>
    </div>
  );
};

export default Issues;
