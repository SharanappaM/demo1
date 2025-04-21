import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarAndSidebar from './NavbarAndSidebar';



const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen ">
   
       <NavbarAndSidebar/>
        <div className="flex-1 flex overflow-y-auto  mt-16">
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;



