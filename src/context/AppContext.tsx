"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextProps {
  data: any[];
  isLoading: boolean;
  error: string | null;
  filter: string;
  setFilter: (filter: string) => void;
  amount: number[];
  setAmount: (amount: number[]) => void;
  selectedSort: string | null;
  setSelectedSort: Dispatch<SetStateAction<string | null>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("inbox");
  const [amount, setAmount] = useState<number[]>([700, 3500]);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        data,
        isLoading,
        error,
        filter,
        setFilter,
        amount,
        setAmount,
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
