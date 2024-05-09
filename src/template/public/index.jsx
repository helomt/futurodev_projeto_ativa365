import styles from "./style.module.css";


// import { Login } from "../../pages/login";
import { Typography } from "@mui/material";
import { SignUp } from "../../pages/signup";

export function PublicTemplate() {
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="/logo-bwr.png"
          alt="Logotipo escrito Ativa 365"
        />
        <Typography fontSize={45} color={"#FF0A1B"} fontStyle={"oblique"}>
          Comece agora a sua jornada
        </Typography>
      </header>
      <main className={styles.mainContainer}>
      <SignUp></SignUp>
      </main>
    </>
  );
}
