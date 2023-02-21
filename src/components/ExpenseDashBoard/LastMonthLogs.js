import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { lastMonthExpenses } from "../../assests/staticData/expenseList";
import { formatCurrency, getFormattedDate } from "../../utils/commonComputes";
import Text from "../Text";
import CategoryIcon from "../CategoryIcon";
import { Box } from "@mui/material";

export default function LastMonthLogs() {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>categories Names</TableCell>
            <TableCell align="center">Transactions</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastMonthExpenses.slice(6, 9).map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box className="flx-rsc">
                  <CategoryIcon item={row} />{" "}
                  <Text sx={{ fontWeight: 600, ml: 1 }}>{row.description}</Text>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Text
                  sx={{
                    color: row?.transaction ? "green" : "red",
                    fontWeight: 600,
                  }}
                >
                  {row?.transaction ? "SUCCESSFULL" : "FAILED"}
                </Text>
              </TableCell>
              <TableCell align="center">
                {getFormattedDate(row.dateTimestamp)}
              </TableCell>
              <TableCell align="right">{formatCurrency(row?.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
