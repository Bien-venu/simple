import LeftNavbar from "@/components/LeftNavbar";
import Main from "@/components/Main";
import React from "react";

const page = () => {
  return (
      <div className="flex w-full">
        <LeftNavbar />
        <Main />
      </div>
  );
};

export default page;
