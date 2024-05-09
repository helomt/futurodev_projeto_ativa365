import { TextField, Typography } from "@mui/material";
import { ButtonFormBlack } from "../../components/buttonFormBlack/buttonFormBlack";
import { ButtonForm } from "../../components/buttonForm/buttonForm";


import styles from "./style.module.css";


export function Login() {
  return (
    <div>
      <div className={styles.container}>
        <Typography fontSize={45} fontWeight={500} color={"#FF0A1B"}>
          Efetue seu login
        </Typography>
        <Typography fontStyle={"italic"} fontSize={20}>
          Comece agora a sua jornada{" "}
        </Typography>
        <form className={styles.form}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            color="error"
          />
          <TextField
            type="password"
            label="Senha"
            variant="outlined"
            color="error"
          />
          <ButtonForm>Entrar</ButtonForm>
        </form>
        <ButtonFormBlack>Cadastre-se</ButtonFormBlack>
      </div>
    </div>
  );
}
