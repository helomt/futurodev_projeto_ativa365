import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Pen, Trash } from "lucide-react";
import { buscarLocais, deletarLocal } from "../../services/serverLocais";
import styles from "./style.module.css";


export function ListPlaces() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [locais, setLocais] = useState([]);
  
  
  const navigate = useNavigate()

  async function deleteLocal(id) {
    await deletarLocal(id);
  }
  
  async function editLocal(id) {
    navigate(`/dashboard/locais/registro/${id}`)
  }


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
    <div>
      <Box className={styles.list}>
        <Box>
          <TableContainer>
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead sx={{}}>
                <TableRow>
                  <TableCell>Local</TableCell>
                  <TableCell align="right">Cidade</TableCell>
                  <TableCell align="right">Atividade Esportiva</TableCell>
                  <TableCell align="right">Usuário</TableCell>
                  <TableCell align="right">Opções</TableCell>
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
                      <TableCell align="right">{item.cidade}</TableCell>
                      <TableCell align="right">{item.atividade}</TableCell>
                      <TableCell align="right">{item.username}</TableCell>
                      <TableCell align="right">
                        <div>
                          <IconButton onClick={() => deleteLocal(item.id)}>
                            <Trash />
                          </IconButton>
                          <IconButton onClick={() => editLocal(item.id)}>
                            <Pen />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[1, 2, 10]}
              component="div"
              count={locais.length}
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
