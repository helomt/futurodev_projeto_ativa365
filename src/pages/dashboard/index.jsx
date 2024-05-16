import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { MapPin, Users } from "lucide-react";
import ListDash from "../../components/listDash";
import styles from "./style.module.css";
import { contarLocais } from "../../services/serverLocais";
import { contarUsuarios } from "../../services/serverUsers";

export function Dashboard() {
  const [users, setUsers] = useState(0);
  const [locais, setLocais] = useState(0);

  useEffect(() => {
    async function buscarContadores() {
      const qtdLocais = await contarLocais();
      const qtdUsuarios = await contarUsuarios();
      setUsers(qtdUsuarios);
      setLocais(qtdLocais);
    }
    buscarContadores();
  }, [users, locais]);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Dashboard com totais cadastrados e listagem de locais"
        />
      </Helmet>
      <div className={styles.mainContainer}>
        <div className={styles.cardContainerLine}>
          <div className={styles.containerText}>
            <Typography fontSize={40} fontWeight={500} fontStyle={"oblique"}>
              Dashboard
            </Typography>
            <Typography fontSize={20}>Total cadastrado:</Typography>
          </div>
          <div className={styles.cardContainer}>
            <Card
              sx={{
                height: 130,
                width: 250,
                borderRadius: 3,
                backgroundColor: "#0F0F0F",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography fontSize={16} color={"#F4F6F4"}>
                  Usuários
                </Typography>
                <div className={styles.cardContentContainer}>
                  <Box>
                    <Typography
                      className={styles.number}
                      fontSize={36}
                      fontWeight={600}
                    >
                      {users}
                    </Typography>
                  </Box>
                  <Box>
                    <Users size={40} className={styles.icon} />
                  </Box>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={styles.cardContainer}>
            <Card
              sx={{
                height: 130,
                width: 250,
                borderRadius: 3,
                backgroundColor: "#0F0F0F",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography fontSize={16} color={"#F4F6F4"}>
                  Locais
                </Typography>
                <div className={styles.cardContentContainer}>
                  <Box>
                    <Typography
                      className={styles.number}
                      fontSize={36}
                      fontWeight={600}
                    >
                      {locais}
                    </Typography>
                  </Box>
                  <Box>
                    <MapPin size={40} className={styles.icon} />
                  </Box>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <Typography fontSize={32} fontWeight={500} fontStyle={"oblique"}>
            Locais
          </Typography>
          <Typography fontSize={18}>Lista dos locais cadastrados</Typography>
        </div>
        <div className={styles.listContainer}>
          <ListDash></ListDash>
        </div>
      </div>
    </>
  );
}
