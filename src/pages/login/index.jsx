import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import styles from "./style.module.css";
import { PublicTemplate } from "../../template/public";
import { useAuth } from "../../context/auth-context";
import { ButtonFormBlack } from "../../components/buttonFormBlack/buttonFormBlack";
import { ButtonForm } from "../../components/buttonForm/buttonForm";

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit() {
    const ok = await signIn(email, password);
    if (ok) {
      navigate("/dashboard");
    } else {
      alert("Email e/ou senha inválido!");
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Página de Login do App" />
      </Helmet>
      <PublicTemplate>
        <div>
          <div className={styles.container}>
            <Typography fontSize={45} fontWeight={500} color={"#FF0A1B"}>
              Efetue seu login
            </Typography>
            <Typography fontStyle={"italic"} fontSize={16}>
              E encontre os locais ideais para o seu esporte
            </Typography>
            <form className={styles.form}>
              <TextField
                value={email}
                onChange={(e) => setEmail(String(e.target.value))}
                type="email"
                label="Email"
                variant="outlined"
                color="error"
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(String(e.target.value))}
                type="password"
                label="Senha"
                variant="outlined"
                color="error"
              />
              <ButtonForm onClick={onSubmit}>Entrar</ButtonForm>
            </form>
            <Link to={"/cadastro"}>
              <ButtonFormBlack>Cadastre-se</ButtonFormBlack>
            </Link>
          </div>
        </div>
      </PublicTemplate>
    </>
  );
}
