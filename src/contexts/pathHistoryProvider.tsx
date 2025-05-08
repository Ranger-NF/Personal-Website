import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PathHistoryContext } from "./pathHistoryContext";

const PathHistoryProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [pathHistory, setPathHistory] = useState<string[]>([]);

  useEffect(() => {
    setPathHistory((prev) => {
      console.log(pathHistory);
      if (prev[prev.length - 1] === location.pathname) return prev;
      return [...prev.slice(-2), location.pathname]; // max 6 entries
    });
  }, [location.pathname]);

  return (
    <PathHistoryContext.Provider value={{ pathHistory }}>
      {children}
    </PathHistoryContext.Provider>
  );
};

export default PathHistoryProvider;
