import React from "react";
import "./AppTextFiled.css";

const AppTextFiled = ({
  placeholder = "Enter Input",
  onChange = () => null,
  style,
  onEnterPress = () => console.log("ENTER PRESSED"),
}) => {
  return (
    <input
      className={`appTextFiled`}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onEnterPress();
      }}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default AppTextFiled;
