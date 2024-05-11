import { Button, Typography } from "@mui/material";
import styles from "./style.module.css";
import ListPlaces from "../../components/listPlaces";



export function Locais() {
  return (
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
          
        </div>
      </div>
      <div className={styles.table}>
        <ListPlaces></ListPlaces>
    
        
      </div>
    </div>
  );
}
