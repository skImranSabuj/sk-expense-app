import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import defaultIcon from "../assests/images/categoryIcons/Home.svg";
import Text from "./Text";

const CategoryIcon = ({ svg = "Home", color = "#5251FA", item, size = 24 }) => {
  const ImportedIconRef = useRef();
  const [svgIcon, setSvgIcon] = useState(defaultIcon);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //   const { onCompleted, onError } = options;
  console.log("svgIcon.svgIcon-->", svgIcon);

  useEffect(() => {
    const importIcon = async () => {
      try {
        setLoading(true);
        ImportedIconRef.current = (
          await import(
            `../assests/images/categoryIcons/${item?.svg || svg}.svg`
          )
        ).ReactComponent;

        console.log("ImportedIconRef.current-->", ImportedIconRef.current);
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
  return (
    <Box
    //   className={`${item.isSelected ? "menuSelected" : ""} menuItem flx-rcc`}
    >
      {loading ? (
        <>
          <Text>Loading..</Text>
        </>
      ) : (
        <img
          src={svgIcon}
          // src={require(`../assests/images/categoryIcons/${item?.svg || svg}.svg`)}
          alt="Icon"
          style={{ height: `${size}px`, width: `${size}px` }}
        />
      )}
    </Box>
  );
};

export default CategoryIcon;
