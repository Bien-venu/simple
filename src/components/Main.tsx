"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import Message from "./Message";
import Issues from "./Issues";

const Main = () => {
  const { filter } = useAppContext();

  if (filter === "inbox") {
    return <Message />;
  }

  if (filter === "issues") {
    return <Issues />;
  }
  return <div className="flex-1 bg-bgGray">{filter}</div>;
};

export default Main;
