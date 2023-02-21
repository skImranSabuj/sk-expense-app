import React from "react";
import ExpenseDashboard from "../components/ExpenseDashBoard/ExpenseDashboard";
import SideBar from "../components/Header/SideBar";

const Root = () => {
  return (
    <div>
      <SideBar />
      <ExpenseDashboard />
    </div>
  );
};

export default Root;
