import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { useEffect, useState } from "react";

import styles from "./style.module.css";
import { buscarLocais } from "../../services/serverLocais";

export default function ListDash() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    async function getLocais() {
      const dados = await buscarLocais();
      if (dados) {
        setLocais(dados);
      }
    }

    getLocais();
  }, [locais]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} className={styles.table}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{}}>
            <TableRow>
              <TableCell>Local</TableCell>
              <TableCell align="left">Usuário</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {locais
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {item.nome}
                  </TableCell>
                  <TableCell align="left">{item.username}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[4, 10]}
          component="div"
          count={locais.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  );
}
