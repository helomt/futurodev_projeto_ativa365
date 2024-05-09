import { Button, TextField, Typography } from "@mui/material";
import styles from "./style.module.css";

export function SignUp() {
  return (
    <div className={styles.container}>
      <Typography>Cadastre-se</Typography>
      <form className={styles.form}>
        <div className={styles.row}>
          <TextField fullWidth label="Nome"></TextField>
          <TextField fullWidth label="Data de Nascimento"></TextField>
        </div>
        <div className={styles.row}>
          <TextField fullWidth label="CPF"></TextField>
          <TextField fullWidth label="Email"></TextField>
        </div>
        <div className={styles.row}>
          <TextField fullWidth label="Senha"></TextField>
          <TextField fullWidth label="CEP"></TextField>
        </div>
        <div className={styles.row}>
          <TextField fullWidth label="Endereço"></TextField>
          <TextField fullWidth label="Número"></TextField>
        </div>
        <div>
          <TextField sx={{width:430}} label="Complemento"></TextField>
        </div>
        <Button>Cadastrar</Button>
      </form>
      <Typography>Já possui conta? Faça seu login.</Typography>
    </div>
  );
}
