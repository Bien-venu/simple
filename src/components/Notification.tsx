import React from "react";
import Activities from "./Activities";

const Notification = ({ data }: any) => {
  return (
    <div className="h-full flex-1 p-8">
      {data.map(
        (
          message: {
            task:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            code:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            name:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            message:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
          },
          index: React.Key | null | undefined,
        ) => (
          <div key={index} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">{message.task}</h1>
              <p className="flex items-center gap-1 text-xs text-grey">
                Sub-issue of <span className="uppercase">{message.code}</span>
                <span className="font-semibold text-white">
                  {" "}
                  {message.name}
                </span>
              </p>
            </div>
            <div className="flex h-fit w-full border-b border-border pb-8 text-sm font-semibold text-canceled">
              <h2>{message.message} </h2>
            </div>
            <Activities message={message} />
          </div>
        ),
      )}
    </div>
  );
};

export default Notification;
