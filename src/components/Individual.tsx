"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const Individual = () => {
  const { filter, setFilter } = useAppContext();

  return (
    <div className="flex flex-col px-4 text-xs">
      <div
        className={` ${filter === "inbox" && " bg-hover"} flex items-center gap-1 rounded p-1 py-2 text-grey hover:bg-bgGray hover:text-white`}
        onClick={() => setFilter("inbox")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={19}
          height={19}
          fill={"none"}
        >
          <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-white">Inbox</h1>
      </div>
      <div
        className={` ${filter === "issues" && " bg-hover"} flex items-center gap-1 rounded p-1 py-2 text-grey hover:bg-bgGray hover:text-white`}
        onClick={() => setFilter("issues")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={19}
          height={19}
          fill={"none"}
        >
          <path
            d="M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.5V4.4M12 19.6V21.5M9.15 12H14.85M19.6 12H21.5M2.5 12H4.4M12 9.14999V14.85"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-white">My issues</h1>
      </div>
    </div>
  );
};

export default Individual;
