import React from "react";

const Notification = ({ data }: any) => {
  return (
    <div className="flex-1 px-16 h-full">
      {data.map((message: { task: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; code: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; message: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
        <div key={index} className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">{message.task}</h1>
            <p className="flex items-center gap-1 text-xs text-grey">
              Sub-issue of <span className="uppercase">{message.code}</span>
              <span className="font-semibold text-white"> {message.name} </span>
            </p>
          </div>
          <div className="flex text-sm font-semibold text-canceled">
            <h2>{message.message} </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
