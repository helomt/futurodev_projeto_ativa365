import { TextField, Typography } from "@mui/material";
import styles from "./style.module.css";
import { InputForm } from "../../components/inputForm/inputForm";
import { ButtonForm } from "../../components/buttonForm/buttonForm";

export function SignUp() {
  return (
    <div className={styles.container}>
      <Typography fontSize={35} fontWeight={500} color={"#FF0A1B"}>
        Cadastre-se
      </Typography>
      <form className={styles.form} autoComplete="off">
        <div className={styles.row}>
          <InputForm labelText={"Nome"} required={true} type="text" />

          <InputForm
            labelText={"Data de Nascimento"}
            required={true}
            type={"text"}
          />
        </div>
        <div className={styles.row}>
          <InputForm labelText={"CPF"} required={true} type="number" />
          <InputForm labelText={"Email"} required={true} type="email" />
        </div>
        <div className={styles.row}>
          <InputForm labelText={"Senha"} required={true} type="text" />
          <InputForm labelText={"CEP"} required={true} type="number" />
        </div>
        <div className={styles.row}>
          <InputForm labelText={"Endereço"} required={false} type="text" />
          <InputForm labelText={"Número"} required={true} type="number" />
        </div>
        <div>
          <TextField
            sx={{ width: 505 }}
            label="Complemento"
            color="error"
            type="text"
          />
        </div>
        <ButtonForm>Cadastrar</ButtonForm>
      </form>
      <Typography>Já possui conta? Faça seu login.</Typography>
    </div>
  );
}
