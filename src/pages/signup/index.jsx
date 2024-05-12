import { CircularProgress, TextField, Typography } from "@mui/material";
import styles from "./style.module.css";
import { ButtonForm } from "../../components/buttonForm/buttonForm";
import { PublicTemplate } from "../../template/public";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().regex(/^(\w\w+)\s(\w+)$/, "Você deve registrar ao menos 2 nomes"),
  data:z.string(),
  cpf:z.string().regex(/[0-9]{11}/,"CPF deve conter 11 números"), 
  email:z.string().email("Endereço de email inválido"),
  senha:z.string().min(3, "A senha deve conter no mínimo 3 caracteres"),
  cep:z.string().regex(/[0-9]{8}/, "O CEP deve conter 8 números"),
  endereco:z.string(),
  numero:z.number().nonnegative("O número não pode ser um valor negativo"),
  complemento: z.string(),
})


export function SignUp() {
  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm({resolver: zodResolver(schema)});

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
              helperText= {errors.nome && <span>{errors.nome.message}</span>}
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
              helperText= {errors.data && <span>{errors.data.message}</span>}
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
              helperText= {errors.cpf && <span>{errors.cpf.message}</span>}
              {...register("cpf")}
            />
            <TextField
              color="error"
              variant="outlined"
              label={"Email"}
              required
              type="email"
              sx={{ width: 250 }}
              helperText= {errors.email && <span>{errors.email.message}</span>}
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
              helperText= {errors.senha && <span>{errors.senha.message}</span>}
              {...register("senha")}
            />
            <TextField
              color="error"
              variant="outlined"
              label={"CEP"}
              required
              // onBlur={}
              type="text"
              sx={{ width: 250 }}
              helperText= {errors.cep && <span>{errors.cep.message}</span>}
              {...register("cep")}
            />
          </div>
          <div className={styles.row}>
         
            <TextField
              color="error"
              variant="outlined"
              label={"Endereço"}
              // disabled
              type="text"
              sx={{ width: 250 }}
              helperText= {errors.endereco && <span>{errors.endereco.message}</span>}
              {...register("endereco")}
            />
            <TextField
              color="error"
              variant="outlined"
              label={"Número"}
              required
              type="number"
              sx={{ width: 250 }}
              helperText= {errors.numero && <span>{errors.numero.message}</span>}
              {...register("numero",{valueAsNumber:true})}
            />
          </div>
          <div>
            <TextField
              sx={{ width: 505 }}
              label="Complemento"
              color="error"
              type="text"
              placeholder="Ex.: bloco, apartamento, sala, etc..."
              helperText= {errors.complemento && <span>{errors.complemento.message}</span>}
              {...register("complemento")}
            />
          </div>
          <ButtonForm type="submit" disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : "Cadastrar"}</ButtonForm>
        </form>
        <Link to={"/"}>
          <Typography>Já possui conta? Faça seu login.</Typography>
        </Link>
      </div>
    </PublicTemplate>
  );
}
