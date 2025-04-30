import { Outlet } from "react-router-dom";
import Header from "./header";

function Layout() {
  return (
    <div className="grid w-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
