"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import Message from "./Message";

const Main = () => {
  const { filter } = useAppContext();

  if (filter === "inbox") {
    return <Message />;
  }
  return <div className="flex-1 bg-bgGray">{filter}</div>;
};

export default Main;
