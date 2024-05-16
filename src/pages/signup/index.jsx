import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CircularProgress, TextField, Typography } from "@mui/material";
import { PublicTemplate } from "../../template/public";
import { ButtonForm } from "../../components/buttonForm/buttonForm";
import styles from "./style.module.css";
import { buscarEndereco } from "../../services/cep";
import {
  criarUsuario,
  validacaoCpf,
  validacaoEmail,
} from "../../services/serverUsers";

const schema = z.object({
  nome: z.string().min(4, "Você deve registrar um nome com 4 letras"),
  data: z.string(),
  cpf: z.string().regex(/[0-9]{11}/, "CPF deve conter 11 números"),
  email: z.string().email("Endereço de email inválido"),
  senha: z.string().min(3, "A senha deve conter no mínimo 3 caracteres"),
  cep: z
    .string()
    .regex(/[0-9]{8}/, "O CEP deve conter 8 números, e somente números"),
  endereco: z.string(),
  numero: z.number().nonnegative("O número não pode ser um valor negativo"),
  complemento: z.string(),
});

export function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      complemento: "",
      endereco: rua,
      numero: 0,
    },
    resolver: zodResolver(schema),
  });
  var rua = "Endereço";

  async function handleBlur() {
    const cep = getValues("cep");
    const enderecoEncontrado = await buscarEndereco(cep);
    rua = `${enderecoEncontrado.logradouro}`;
    resetField("endereco", { defaultValue: rua });
  }

  const navigate = useNavigate();

  async function onSubmit(values) {
    if (values.endereco != "Endereço") {
      const cpfInvalido = await validacaoCpf(values.cpf);
      const emailInvalido = await validacaoEmail(values.email);
      if (cpfInvalido || emailInvalido) {
        alert("Usuário já cadastrado\n Favor verificar login e/ou CPF");
      } else {
        await criarUsuario(values);
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      }
    } else {
      alert("Erro no CEP e/ou Endereço.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Cadastro</title>
        <meta
          name="description"
          content="Página de cadastro de novos usuários"
        />
      </Helmet>
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
                helperText={errors.nome && <span>{errors.nome.message}</span>}
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
                helperText={errors.data && <span>{errors.data.message}</span>}
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
                helperText={errors.cpf && <span>{errors.cpf.message}</span>}
                {...register("cpf")}
              />
              <TextField
                color="error"
                variant="outlined"
                label={"Email"}
                required
                type="email"
                sx={{ width: 250 }}
                helperText={errors.email && <span>{errors.email.message}</span>}
                {...register("email")}
              />
            </div>
            <div className={styles.row}>
              <TextField
                color="error"
                variant="outlined"
                label={"Senha"}
                required
                type="password"
                sx={{ width: 250 }}
                helperText={errors.senha && <span>{errors.senha.message}</span>}
                {...register("senha")}
              />
              <TextField
                color="error"
                variant="outlined"
                label={"CEP"}
                required
                type="text"
                sx={{ width: 250 }}
                helperText={errors.cep && <span>{errors.cep.message}</span>}
                {...register("cep", { onBlur: handleBlur })}
              />
            </div>
            <div className={styles.row}>
              <TextField
                color="error"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                label="Endereço"
                disabled
                type="text"
                sx={{ width: 250 }}
                helperText={
                  errors.endereco && <span>{errors.endereco.message}</span>
                }
                {...register("endereco", { value: rua })}
              />
              <TextField
                color="error"
                variant="outlined"
                label={"Número"}
                required
                type="number"
                sx={{ width: 250 }}
                helperText={
                  errors.numero && <span>{errors.numero.message}</span>
                }
                {...register("numero", { valueAsNumber: true })}
              />
            </div>
            <div>
              <TextField
                sx={{ width: 505 }}
                label="Complemento"
                color="error"
                type="text"
                placeholder="Ex.: bloco, apartamento, sala, etc..."
                helperText={
                  errors.complemento && (
                    <span>{errors.complemento.message}</span>
                  )
                }
                {...register("complemento")}
              />
            </div>
            <ButtonForm type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <CircularProgress disableShrink sx={{ color: "#0F0F0F" }} />
              ) : (
                "Cadastrar"
              )}
            </ButtonForm>
          </form>
          <Link to={"/"}>
            <Typography>Já possui conta? Faça seu login.</Typography>
          </Link>
        </div>
      </PublicTemplate>
    </>
  );
}
