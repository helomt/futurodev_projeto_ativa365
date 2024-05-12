import { TextField, Typography } from "@mui/material";
import styles from "./style.module.css";
import { ButtonForm } from "../../components/buttonForm/buttonForm";
import { PublicTemplate } from "../../template/public";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export function SignUp() {
  const { register, handleSubmit } = useForm();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <PublicTemplate>
      <div className={styles.container}>
        <Typography fontSize={35} fontWeight={500} color={"#FF0A1B"}>
          Cadastre-se
        </Typography>
        <form
          className={styles.form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.row}>
            <TextField
              color="error"
              variant="outlined"
              label={"Nome"}
              required
              type="text"
              sx={{ width: 250 }}
              {...register("nome")}
            />
            <TextField
              color="error"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              label={"Data de Nascimento"}
              required
              type="date"
              sx={{ width: 250 }}
              {...register("data")}
            />
          </div>
          <div className={styles.row}>
            <TextField
              color="error"
              variant="outlined"
              label={"CPF"}
              required
              type="text"
              sx={{ width: 250 }}
              {...register("cpf")}
            />
            <TextField
              color="error"
              variant="outlined"
              label={"Email"}
              required
              type="email"
              sx={{ width: 250 }}
              {...register("email")}
            />
          </div>
          <div className={styles.row}>
            <TextField
              color="error"
              variant="outlined"
              label={"Senha"}
              required
              type="text"
              sx={{ width: 250 }}
              {...register("senha")}
            />
            <TextField
              color="error"
              variant="outlined"
              label={"CEP"}
              required
              type="text"
              sx={{ width: 250 }}
              {...register("cep")}
            />
          </div>
          <div className={styles.row}>
         
            <TextField
              color="error"
              variant="outlined"
              label={"Endereço"}
              type="text"
              sx={{ width: 250 }}
              {...register("endereco")}
            />
            <TextField
              color="error"
              variant="outlined"
              label={"Número"}
              required
              type="number"
              sx={{ width: 250 }}
              {...register("numero")}
            />
          </div>
          <div>
            <TextField
              sx={{ width: 505 }}
              label="Complemento"
              color="error"
              type="text"
              {...register("complemento")}
            />
          </div>
          <ButtonForm type="submit">Cadastrar</ButtonForm>
        </form>
        <Link to={"/"}>
          <Typography>Já possui conta? Faça seu login.</Typography>
        </Link>
      </div>
    </PublicTemplate>
  );
}
