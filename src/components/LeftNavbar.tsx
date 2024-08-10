"use client";
import { useState } from "react";
import { Company } from "./Company";
import Header from "./Header";
import Individual from "./Individual";
import { Teams } from "./Teams";

const LeftNavbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const name = localStorage.getItem("username");
  return (
    <div className="flex h-screen w-80 flex-col gap-4 py-4">
      <Header />
      {name?.toLocaleLowerCase() != "admin" && <Individual />}
      <Teams />
    </div>
  );
};

export default LeftNavbar;
