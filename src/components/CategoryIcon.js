import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import icon0 from "../assests/images/categoryIcons/car.svg";
import icon1 from "../assests/images/categoryIcons/home.svg";
import icon2 from "../assests/images/categoryIcons/document.svg";
import icon3 from "../assests/images/categoryIcons/game.svg";
import icon4 from "../assests/images/categoryIcons/password.svg";
import icon5 from "../assests/images/categoryIcons/video.svg";
import icon6 from "../assests/images/categoryIcons/buy.svg";
import { getCategories } from "../utils/expenseData";
import Text from "./Text";
// import * as images from "../assests/images/categoryIcons";

const CategoryIcon = ({
  svg = "Home",
  color = "#5251FA",
  item,
  size = 20,
  sx,
  index = 0,
}) => {
  const [svgIcon, setSvgIcon] = useState(icon0);
  const [bgColor, setBgColor] = useState(color);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  console.log(item.catagory);

  let iconList = [icon0, icon1, icon2, icon3, icon4, icon5, icon6];

  const categoryList = getCategories();

  useEffect(() => {
    const importIcon = async () => {
      try {
        setLoading(true);
        categoryList.find((cItem) => {
          // console.log("index==>", iconList[cItem?.index || 0]);
          if (cItem?.catagory === item.catagory) {
            setBgColor(cItem.color);
          }
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    // if (item?.catagory)
    importIcon();
  }, [item?.catagory]);

  if (loading) {
    <Box
      className="flx-rcc"
      sx={{
        backgroundColor: bgColor,
        height: "32px",
        width: "32px",
        borderRadius: "16px",
      }}
    ></Box>;
  }

  return (
    <Box
      className="flx-rcc"
      sx={{
        backgroundColor: bgColor,
        height: size * 2,
        width: size * 2,
        borderRadius: size,
        ...sx,
      }}
    >
      <img
        src={icon2}
        alt="Image1"
        style={{
          width: size,
          height: size,
        }}
      />
    </Box>
  );
};

export default CategoryIcon;
