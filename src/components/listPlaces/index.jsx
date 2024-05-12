import * as React from "react";

import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import styles from "./style.module.css";
import { Pen, Trash } from "lucide-react";

export function ListPlaces() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Box className={styles.list}>
        <Box>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Local</TableCell>
                  <TableCell align="right">Cidade</TableCell>
                  <TableCell align="right">Atividade Esportiva</TableCell>
                  <TableCell align="right">Usuário</TableCell>
                  <TableCell align="right">Opções</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Academia
                  </TableCell>
                  <TableCell align="right">TUbarão</TableCell>
                  <TableCell align="right">Musculação</TableCell>
                  <TableCell align="right">Gustavo</TableCell>
                  <TableCell align="right">
                    <div>
                      <IconButton>
                        <Trash />
                      </IconButton>
                      <IconButton>
                        <Pen />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Academia
                  </TableCell>
                  <TableCell align="right">TUbarão</TableCell>
                  <TableCell align="right">Musculação</TableCell>
                  <TableCell align="right">Gustavo</TableCell>
                  <TableCell align="right">
                    <div>
                      <IconButton>
                        <Trash />
                      </IconButton>
                      <IconButton>
                        <Pen />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <TablePagination
            rowsPerPageOptions={[1, 2, 100]}
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
