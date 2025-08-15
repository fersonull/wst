import { Outlet } from "react-router-dom";
import NavBar from "../../Components/ui/NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen dark:text-white font-geist dark:bg-[#171717]">
      <NavBar />

      <div className="h-full mx-auto lg:w-[65%] w-[90%]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
