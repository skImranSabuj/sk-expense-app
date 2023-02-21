import React from "react";
import Text from "../Text";

const AppBarBox = ({ children }) => {
  return (
    <div className="appBarBox">
      {/* <Text>App Bar box</Text> */}
      {children}
    </div>
  );
};

export default AppBarBox;
