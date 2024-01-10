import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Tooltip } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactElement, useState } from "react";
import { showDateTime } from "utils";
import translateBoolean from "utils/translateBoolean";

type Order = "asc" | "desc";

function cellValue(data: any): string | number {
  if (typeof data === "string" || typeof data === "number") {
    return data;
  } else if (typeof data === "boolean") {
    return translateBoolean(data, "pl");
  } else if (!data) {
    return "";
  } else return showDateTime(data);
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface CustomDataTableActionInterface {
  label: string;
  icon: ReactElement;
  isShown: (element: any) => boolean;
  onClick: (element: any) => void;
}

interface CustomDataTableInterface {
  headers: string[];
  objectKeys: string[];
  dataArray: any[];
  maxWidthColumnNubers?: number[];
  sx?: SxProps<Theme>;
  actions: CustomDataTableActionInterface[];
  pagination?: boolean;
}

function CustomDataTable(props: CustomDataTableInterface): ReactElement {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>(props.headers[0]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(props.pagination ? 5 : props.dataArray.length);

  const tableBodyCellSX = (rowIndex: number) => {
    return { background: rowIndex % 2 === 1 ? "#FFF" : "inherit", borderBottom: "none", padding: "5px 16px" };
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#F8F8F8",
        padding: "20px",
        width: "calc(100% - 40px)",
        ...props.sx,
      }}
    >
      <TableContainer>
        <Table
          stickyHeader
          sx={{
            borderCollapse: "separate",
            "& tr": { whiteSpace: "nowrap" },
            "& th": { fontWeight: "bold", borderBottom: "none" },
          }}
        >
          <TableHead>
            <TableRow>
              {props.headers.map((headCell, headerCellIndex) => {
                return (
                  <TableCell key={`custom-data-table-header-cell-${headerCellIndex}`}>
                    <TableSortLabel
                      active={orderBy === props.objectKeys[headerCellIndex]}
                      direction={orderBy === props.objectKeys[headerCellIndex] ? order : "asc"}
                      onClick={(event: React.MouseEvent<unknown>) => {
                        setOrder(orderBy === props.objectKeys[headerCellIndex] ? (order === "asc" ? "desc" : "asc") : "asc");
                        setOrderBy(props.objectKeys[headerCellIndex]);
                      }}
                    >
                      {headCell}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
              {props.actions.length > 0 && <TableCell></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(props.dataArray, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((tableElement, rowIndex) => {
                return (
                  <TableRow key={`custom-data-table-row-${rowIndex}`} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {props.objectKeys.map((key, cellIndex) => {
                      return (
                        <TableCell
                          key={`custom-data-table-cell-${cellIndex}`}
                          sx={
                            props.maxWidthColumnNubers?.find((columnNumber) => {
                              return columnNumber === cellIndex + 1;
                            })
                              ? { ...tableBodyCellSX(rowIndex), width: `calc(100% / ${props.maxWidthColumnNubers.length})`, whiteSpace: "normal" }
                              : tableBodyCellSX(rowIndex)
                          }
                        >
                          {cellValue(tableElement[key])}
                        </TableCell>
                      );
                    })}
                    {props.actions.length > 0 && (
                      <>
                        <TableCell sx={{ ...tableBodyCellSX(rowIndex) }}>
                          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "end" }}>
                            {props.actions.map((action) => {
                              if (action.isShown(tableElement)) {
                                if (action.label) {
                                  return (
                                    <Tooltip title={action.label} placement="top">
                                      <IconButton onClick={() => action.onClick(tableElement)} sx={{ paddingY: "0px" }}>
                                        {action.icon}
                                      </IconButton>
                                    </Tooltip>
                                  );
                                } else {
                                  return (
                                    <IconButton onClick={() => action.onClick(tableElement)} sx={{ paddingY: "0px" }}>
                                      {action.icon}
                                    </IconButton>
                                  );
                                }
                              } else return <></>;
                            })}
                          </Box>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {props.pagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.dataArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => {
            setPage(newPage);
          }}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
          sx={{ display: "flex", justifyContent: "center", "& MuiToolbar-root": { padding: "0px" } }}
        />
      )}
    </Box>
  );
}

export default CustomDataTable;
