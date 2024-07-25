"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import Message from "./Message";
import Issues from "./Issues";
import Tasks from "./Tasks";
import Active from "./Active";
import Backlog from "./Backlog";

const Main = () => {
  const { filter } = useAppContext();

  if (filter === "inbox") {
    return <Message />;
  }

  if (filter === "issues") {
    return <Issues />;
  }

  if (filter === "tasks") {
    return <Tasks />;
  }

  if (filter === "active") {
    return <Active />;
  }

  if (filter === "backlog") {
    return <Backlog />;
  }
  
  if (filter === "issue") {
    return <Tasks />;
  }
  

  return <div className="flex-1 bg-bgGray">{filter}</div>;
};

export default Main;
