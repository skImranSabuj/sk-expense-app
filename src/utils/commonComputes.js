export const getDateTimeStamp = (previousDay = 0) => {
  const now = new Date();
  let date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - previousDay
  );
  return Date.parse(date);
};

export const formatCurrency = (num = 0) => {
  if (isNaN(parseFloat(num))) return 0;
  return parseFloat(num).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
