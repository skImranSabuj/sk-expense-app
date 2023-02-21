import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import defaultIcon from "../assests/images/categoryIcons/home.svg";
import { getCategories } from "../utils/expenseData";
import Text from "./Text";
// import * as images from "../assests/images/categoryIcons";

const CategoryIcon = ({ svg = "Home", color = "#5251FA", item, size = 24 }) => {
  const ImportedIconRef = useRef();
  const [svgIcon, setSvgIcon] = useState(defaultIcon);
  const [bgColor, setBgColor] = useState(color);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const categoryList = getCategories();

  //   const { onCompleted, onError } = options;
  console.log("item->>>>", item);

  useEffect(() => {
    const importIcon = async () => {
      try {
        setLoading(true);
        categoryList.find((cItem) => {
          console.log({ cItem });
          if (cItem?.catagory === item.catagory) {
            setBgColor(cItem.color);
          }
        });
        ImportedIconRef.current = (
          await import(
            `../assests/images/categoryIcons/${item?.svg || svg}.svg`
          )
        ).ReactComponent;

        // console.log("ImportedIconRef.current-->", ImportedIconRef);
        setSvgIcon(ImportedIconRef.current);
        // if (onCompleted) {
        // //   onCompleted(name, ImportedIconRef.current);
        // }
      } catch (err) {
        // if (onError) {
        //   onError(err);
        // }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    if (item?.catagory) importIcon();
  }, [item?.catagory]);

  if (loading) {
    <Box
      className="flx-rcc"
      sx={{
        backgroundColor: bgColor,
        height: "40px",
        width: "40px",
        borderRadius: "20px",
      }}
    ></Box>;
  }

  return (
    <Box
      className="flx-rcc"
      sx={{
        backgroundColor: bgColor,
        height: "40px",
        width: "40px",
        borderRadius: "20px",
      }}
    >
      <img
        src={svgIcon}
        alt="Image1"
        style={{
          width: "24px",
          height: "24px",
        }}
      />
    </Box>
  );
};

export default CategoryIcon;
