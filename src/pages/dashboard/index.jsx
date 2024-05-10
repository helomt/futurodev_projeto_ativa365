import { Box, Card, CardContent, Typography } from "@mui/material";

import styles from "./style.module.css";
import { MapPin, Users } from "lucide-react";

export function Dashboard() {
  return (
    <div className={styles.mainContainer}>
      <Typography>Dashboard</Typography>
      <h3>Cards</h3>
      <div className={styles.cardContainerLine}>
        
        <div className={styles.cardContainer} >
          <Card sx={{ height: 150, width: 300, borderRadius: 3, backgroundColor:'#0F0F0F' }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontSize={20} color={"#F4F6F4"}>
                Usuários
              </Typography>
              <div className={styles.cardContentContainer}>
                <Box>
                  <Typography
                    className={styles.number}
                    fontSize={40}
                    fontWeight={600}
                  >
                    25
                  </Typography>
                </Box>
                <Box>
                  <Users size={50} className={styles.icon} />
                </Box>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={styles.cardContainer} >
          <Card sx={{ height: 150, width: 300, borderRadius: 3, backgroundColor:'#0F0F0F' }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontSize={20} color={"#F4F6F4"}>
                Locais
              </Typography>
              <div className={styles.cardContentContainer}>
                <Box>
                  <Typography
                    className={styles.number}
                    fontSize={40}
                    fontWeight={600}
                  >
                    25
                  </Typography>
                </Box>
                <Box>
                  <MapPin  size={50} className={styles.icon} />
                </Box>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <Typography>Locais</Typography>
        <Typography>Lista dos locais cadastrados</Typography>
      </div>
      <div className={styles.listContainer}>
        <h3>Lista</h3>
      </div>
    </div>
  );
}
