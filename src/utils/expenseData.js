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
      svg: "Home",
    },
    {
      catagory: "gas",
      color: "#4707E8",
      svg: "Car",
    },
    {
      catagory: "security",
      color: "#F2C94C",
      svg: "Password",
    },
    {
      catagory: "videos",
      color: "#56CCF2",
      svg: "Password",
    },
    {
      catagory: "games",
      color: "#F2994A",
      svg: "Game",
    },
    {
      catagory: "papers",
      color: "#27AE60",
      svg: "Document",
    },
    {
      catagory: "shops",
      color: "#EF5DA8",
      svg: "Buy",
    },
    {
      catagory: "travel",
      color: "#9B51E0",
      svg: "Car",
    },
    {
      catagory: "service",
      color: "#219653",
      svg: "Car",
    },
  ];

  return categoriesList;
};
