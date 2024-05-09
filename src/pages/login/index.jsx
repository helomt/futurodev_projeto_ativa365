import { Button, TextField, Typography } from "@mui/material";
import styles from "./style.module.css";

export function Login() {
  return (
    <div>
      <div className={styles.container}>
        <Typography variant="h4">Efetue seu login </Typography>
        <form className={styles.form}>
          <TextField type="email" label="Email" variant="outlined" />
          <TextField type="password" label="Senha" variant="outlined" />
          <Button variant="contained" sx={{width: 500, height: 50}}>Entrar</Button>
        </form>
          <Button variant="contained" sx={{width: 500, height: 50}}>Cadastre-se</Button>
      </div>
    </div>
  );
}
