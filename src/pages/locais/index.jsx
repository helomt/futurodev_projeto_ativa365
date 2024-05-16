import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography } from "@mui/material";
import styles from "./style.module.css";
import { ListPlaces } from "../../components/listPlaces";

export function Locais() {
  return (
    <>
      <Helmet>
        <title>Locais</title>
        <meta
          name="description"
          content="Página de listagem do todos os locais cadastrados"
        />
      </Helmet>
      <div className={styles.mainContainer}>
        <div className={styles.containerHeader}>
          <div>
            <Typography fontSize={40} fontWeight={500} fontStyle={"oblique"}>
              Locais
            </Typography>
            <Typography>
              Localidades de atividade esportivas cadastradas
            </Typography>
          </div>
          <div>
            <Link to={"/dashboard/locais/registro"}>
              <Button
                variant="contained"
                sx={{
                  width: 300,
                  height: 50,
                  bgcolor: "#FF0A1B",
                  "&:hover": { backgroundColor: "#F35359" },
                }}
              >
                Cadastrar
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.table}>
          <ListPlaces></ListPlaces>
        </div>
      </div>
    </>
  );
}
