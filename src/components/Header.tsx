import React from "react";
import { Company } from "./Company";
import { Alert } from "./Alert";

const Header = () => {
  return (
    <div className="flex w-full justify-between px-5 pb-2">
      <Company />
      <Alert />
    </div>
  );
};

export default Header;
