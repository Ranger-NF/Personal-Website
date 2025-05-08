import { createContext, useContext } from "react";

interface PathHistoryContextProps {
  pathHistory: string[];
}

export const PathHistoryContext = createContext<PathHistoryContextProps>({
  pathHistory: [],
});

export const usePathHistory = () => useContext(PathHistoryContext);
