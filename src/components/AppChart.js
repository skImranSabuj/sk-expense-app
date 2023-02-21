import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import ChartBar from "./ChartBar";
import Text from "./Text";

const AppChart = () => {
  const dayList = [
    { name: "Mo", value: 20 },
    { name: "Tu", value: 45 },
    { name: "We", value: 70 },
    { name: "Th", value: 35 },
    { name: "Fr", value: 55 },
    { name: "Sa", value: 10 },
    { name: "Su", value: 75 },
  ];

  const [makHeight, setMakHeight] = useState(100);

  return (
    <Box sx={{ position: "relative" }}>
      <Grid container sm={10} sx={{}}>
        <Grid
          sm={1.5}
          sx={{
            justifySelf: "baseline",
            height: "200px",
            // border: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            pb: 1,
          }}
        >
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reverse().map((n) => (
            <Text key={n}>{n}</Text>
          ))}
        </Grid>
        {dayList?.map((day, index) => (
          <Grid
            sm={1.5}
            sx={{
              justifySelf: "baseline",
              height: "200px",
              //   border: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {/* <Box sx={{ height: getHeight(day.value) }}></Box> */}
            <ChartBar height={day.value} />
            <Text>{day.name}</Text>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AppChart;
