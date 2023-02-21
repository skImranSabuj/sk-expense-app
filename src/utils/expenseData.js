import { getDateTimeStamp } from "./commonComputes";

export const getExpenseData = () => {
  const expenseList = [
    {
      catagory: "home",
      title: "Anti virus",
      value: 500,
      createdDateTimesStamp: getDateTimeStamp(),
    },
    {
      catagory: "gas",
      title: "Re Filled",
      value: 700,
      createdDateTimesStamp: getDateTimeStamp(),
    },
    {
      catagory: "security",
      title: "IP Camera",
      value: 700,
      createdDateTimesStamp: getDateTimeStamp(1),
    },
  ];

  return expenseList;
};

export const getCategories = () => {
  const categoriesList = [
    {
      catagory: "home",
      color: "#FD4438",
      svg: "home",
      index: 1,
    },
    {
      catagory: "gas",
      color: "#4707E8",
      svg: "car",
      index: 0,
    },
    {
      catagory: "security",
      color: "#F2C94C",
      svg: "password",
      index: 4,
    },
    {
      catagory: "videos",
      color: "#56CCF2",
      svg: "password",
      index: 5,
    },
    {
      catagory: "games",
      color: "#F2994A",
      svg: "game",
      index: 0,
    },
    {
      catagory: "papers",
      color: "#27AE60",
      svg: "document",
      index: 2,
    },
    {
      catagory: "shops",
      color: "#EF5DA8",
      svg: "buy",
      index: 6,
    },
    {
      catagory: "travel",
      color: "#9B51E0",
      svg: "car",
      index: 0,
    },
    {
      catagory: "service",
      color: "#219653",
      svg: "car",
      index: 0,
    },
  ];

  return categoriesList;
};
