import { TextField, Typography } from "@mui/material";
import styles from "./style.module.css";
import { InputForm } from "../../components/inputForm/inputForm";
import { ButtonForm } from "../../components/buttonForm/buttonForm";


export function SignUp() {
  return (
    <div className={styles.container}>
      <Typography fontSize={35} fontWeight={500} color={"#FF0A1B"}>Cadastre-se</Typography>
      <form className={styles.form}>
        <div className={styles.row}>
          <InputForm labelText={'Nome'} required={true}/>
          <InputForm labelText={'Data de Nascimento'} required={true}/>
        </div>
        <div className={styles.row}>
        <InputForm labelText={'CPF'} required={true}/>
        <InputForm labelText={'Email'} required={true}/>
        </div>
        <div className={styles.row}>
        <InputForm labelText={'Senha'} required={true}/>
        <InputForm labelText={'CEP'} required={true}/>
        </div>
        <div className={styles.row}>
        <InputForm labelText={'Endereço'} required={false}/>
        <InputForm labelText={'Número'} required={true}/>
        </div>
        <div>
          <TextField sx={{width:505}} label="Complemento" color="error"/>
        </div>
        <ButtonForm>Cadastrar</ButtonForm>
      </form>
      <Typography>Já possui conta? Faça seu login.</Typography>
    </div>
  );
}
