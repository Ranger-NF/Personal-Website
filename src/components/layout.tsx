import { Outlet } from "react-router-dom";
import Header from "./header";
import PathHistoryProvider from "../contexts/pathHistoryProvider";

function Layout() {
  return (
    <div className="grid w-full">
      <PathHistoryProvider>
        <Header />
        <Outlet />
      </PathHistoryProvider>
    </div>
  );
}

export default Layout;
