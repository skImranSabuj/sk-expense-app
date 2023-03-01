import React from "react";
// import "./Layout.css";
import { Outlet } from "react-router-dom";
import SideBar from "./Header/SideBar";

const Layout = () => {
  return (
    <div className="layout">
      <header className="App-header">
        <SideBar />
      </header>
      <main className="App-body">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
