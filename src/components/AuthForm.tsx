import Link from "next/link";
import React from "react";

const AuthForm = ({ data }: any) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className="text-black h-fit w-full items-center justify-center p-2 text-sm font-medium sm:flex sm:w-1/2 sm:p-8"
        >
          <div className="bg-light flex h-fit w-full min-w-80 flex-col gap-6 rounded-lg p-8 py-12 xl:w-3/4">
            <div className="flex flex-col gap-4">
              <h1 className="text-black text-2xl font-semibold">
                {item.title}
              </h1>
              <p className="flex items-center gap-1">
                {item.path.message}
                <Link
                  href={item.path.path}
                  className=" text-improvement font-semibold"
                >
                  {item.path.name}
                </Link>
              </p>
            </div>
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                {item.inputs.map((input: any, inputIndex: number) => (
                  <div key={inputIndex} className="flex flex-col gap-0">
                    <label>{input}</label>
                    {input.toLowerCase() === "password" ? (
                      <input
                        type="password"
                        placeholder={input.placeholder}
                        className="text-gray border-b border-border bg-background pt-2 text-sm"
                        required={input.required}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder={input.placeholder}
                        className="text-gray border-b border-border bg-background pt-2 text-sm"
                        required={input.required}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="h-3.5 w-3.5"
                />
                <label
                  htmlFor="rememberMe"
                  className="flex w-full items-center justify-between"
                >
                  {item.addition.request}
                  <span className="text-black font-semibold underline underline-offset-4">
                    {item.addition.forgot}
                  </span>
                </label>
              </div>
              <Link
                href="/issues"
                type="submit"
                className="bg-black flex w-full items-center justify-center bg-white p-3 font-semibold text-background"
              >
                {item.button}
              </Link>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default AuthForm;
