import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import styles from "./style.module.css";
import { listaDePraticas } from "../../utils/listaDePraticas";

export function Registro() {
  return (
    <div>
      <div>
        <Typography fontSize={40} fontWeight={500} fontStyle={"oblique"}>
          Registro de localidade
        </Typography>
        <Typography>
          Preencha os campos abaixo para adicionar um novo local de práticas
          esportivas
        </Typography>
      </div>
      <form className={styles.form}>
        <div className={styles.row}>
          <TextField
            label="Nome do local"
            variant="outlined"
            color="error"
            type="text"
            required
            sx={{ width: 390 }}
          />
          <div>
            <FormControl required color="error">
              <InputLabel id="atividade">Atividade</InputLabel>
              <Select
                // value={age}
                labelId="atividade"
                label="Atividade"
                // onChange={handleChange}
                color="error"
                sx={{ width: 390 }}
              >
                {listaDePraticas.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={styles.row}>
          <TextField
            label="Descrição"
            color="error"
            type="text"
            variant="outlined"
            multiline
            rows={2}
            sx={{ width: 785 }}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="CEP"
            variant="outlined"
            color="error"
            type="number"
            required
            sx={{ width: 390 }}
          />
          <TextField
            label="Endereço"
            variant="outlined"
            color="error"
            type="text"
            sx={{ width: 390 }}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="Número"
            variant="outlined"
            color="error"
            type="number"
            sx={{ width: 390 }}
          />
          <TextField
            label="Cidade"
            variant="outlined"
            color="error"
            type="text"
            sx={{ width: 390 }}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="Complemento"
            placeholder="Ex.: Bloco, Apartamento, etc..."
            variant="outlined"
            color="error"
            type="text"
            sx={{ width: 785 }}
          />
        </div>
        <div></div>
        <Button
          variant="contained"
          sx={{
            width: 785,
            height: 50,
            bgcolor: "#FF0A1B",
            "&:hover": { backgroundColor: "#F35359" },
          }}
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
