"use client";
import Main from "@/components/Main";

import { useAppContext } from "@/context/AppContext";

const Page = () => {
  const { filter } = useAppContext();
  return <Main filter={filter} />;
};

export default Page;
