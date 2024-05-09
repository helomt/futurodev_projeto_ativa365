import { Button, TextField, Typography } from "@mui/material";
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

          <Button
            variant="contained"
            sx={{
              width: 400,
              height: 50,
              bgcolor: "#FF0A1B",
              "&:hover": { backgroundColor: "#F35359" },
            }}
          >
            Entrar
          </Button>
        </form>
        <Button
          variant="contained"
          sx={{
            width: 400,
            height: 50,
            bgcolor: "#0F0F0F",
            "&:hover": { backgroundColor: "#70675C" },
          }}
        >
          Cadastre-se
        </Button>
      </div>
    </div>
  );
}
