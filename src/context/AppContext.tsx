'use client'
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
  selectedStatus: string;
  setSelectedStatus: Dispatch<SetStateAction<string>>;
  filter: string;
  setFilter: (filter: string) => void;
  message: number | null;
  setMessage: Dispatch<SetStateAction<number | null>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState("To Do");
  const [filter, setFilter] = useState("inbox");
  const [message, setMessage] = useState<number | null>(null);

  return (
    <AppContext.Provider
      value={{
        data,
        isLoading,
        error,
        filter,
        setFilter,
        message,
        setMessage,
        selectedStatus,
        setSelectedStatus,
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
