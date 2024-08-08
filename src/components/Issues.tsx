import MainHeader from "./MainHeader";
import { messages } from "@/data/data";
import IssuesCard from "./IssuesCard";

const Issues = () => {
  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full flex-col rounded border border-border bg-bgGray">
        <h1 className="border-b border-border p-2 px-8">My issues</h1>
        <div className="flex flex-col">
          {messages.map((m, index) => (
            <IssuesCard key={index} data={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Issues;
