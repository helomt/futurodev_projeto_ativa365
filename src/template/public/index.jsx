import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import styles from "./style.module.css";


export function PublicTemplate({ children }) {
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
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
}

PublicTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
