import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="flex w-screen h-screen bg-slate-200 ">
      <Sidebar/>
      <div className="flex-1 dark:bg-slate-600">
        <Header />
        <main className="">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
