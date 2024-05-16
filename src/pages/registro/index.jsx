import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./style.module.css";
import { listaDePraticas } from "../../utils/listaDePraticas";
import { buscarEndereco } from "../../services/cep";
import {
  atualizarLocal,
  buscarUmLocal,
  criarLocal,
} from "../../services/serverLocais";
import { getLocalUserName } from "../../services/localUser";

const schema = z.object({
  nome: z.string().min(3, "O nome do local deve conter no mínimo 3 caracteres"),
  atividade: z.string(),
  descricao: z.string(),
  cep: z.string().regex(/[0-9]{8}/, "O CEP deve conter 8 números"),
  endereco: z.string(),
  numero: z.number().nonnegative("O número não pode ser um valor negativo"),
  cidade: z.string(),
  complemento: z.string(),
});

export function Registro() {
  const navigate = useNavigate();
  const url = useParams();
  var rua = "Endereço";
  var cidade = "Cidade";

  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      nome: "",
      atividade: "",
      complemento: "",
      cidade: cidade,
      endereco: rua,
      descricao: "",
      numero: 0,
    },
    resolver: zodResolver(schema),
  });

  async function setFields(id) {
    if (url.id > 0) {
      const data = await buscarUmLocal(id);
      setValue("nome", data.nome);
      setValue("atividade", data.atividade);
      setValue("descricao", data.descricao);
      setValue("cep", data.cep);
      setValue("endereco", data.endereco);
      setValue("numero", data.numero);
      setValue("cidade", data.cidade);
      setValue("complemento", data.complemento);
    } else {
      console.log("nada");
    }
  }

  useEffect(() => {
    if (url.id > 0) {
      setFields(url.id);
    }
  }, [url.id]);

  async function handleBlur() {
    const cep = getValues("cep");
    const enderecoEncontrado = await buscarEndereco(cep);
    rua = `${enderecoEncontrado.logradouro}`;
    cidade = `${enderecoEncontrado.localidade}`;
    resetField("endereco", { defaultValue: rua });
    resetField("cidade", { defaultValue: cidade });
  }

  async function onSubmit(values) {
    const username = getLocalUserName();
    if (url.id > 0) {
      if (values.endereco != "Endereço") {
        await atualizarLocal(url.id, values, username);
        alert("Local atualizado com sucesso");
        navigate("/dashboard/locais");
      } else {
        alert("Erro no CEP e/ou Endereço.\nLocal não atualizado.");
      }
    } else {
      if (values.endereco != "Endereço") {
        await criarLocal(values, username);
        alert("Local cadastrado com sucesso");
        navigate("/dashboard/locais");
      } else {
        alert("Erro no CEP e/ou Endereço.\nLocal não cadastrado.");
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Registro de Local</title>
        <meta name="description" content="Página de cadastro de Locais" />
      </Helmet>
      <div>
        <div>
          <Typography fontSize={40} fontWeight={500} fontStyle={"oblique"}>
            Registro de localidade
          </Typography>
          <Typography>
            Preencha os campos abaixo para adicionar um novo local de práticas
            esportivas
          </Typography>
        </div>
        <form
          className={styles.form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.row}>
            <TextField
              label="Nome do local"
              placeholder="Nome do local"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              color="error"
              type="text"
              required
              sx={{ width: 390 }}
              helperText={errors.nome && <span>{errors.nome.message}</span>}
              {...register("nome")}
            />
            <div>
              <Typography fontSize={3}></Typography>
              <FormControl required color="error">
                <InputLabel id="atividade">
                  {url.id > 0 ? watch("atividade") : "Atividade"}
                </InputLabel>
                <Select
                  labelId="atividade"
                  color="error"
                  defaultValue={""}
                  sx={{ width: 390 }}
                  {...register("atividade")}
                >
                  {listaDePraticas.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {errors.atividade && <span>{errors.atividade.message}</span>}
                </FormHelperText>
              </FormControl>
            </div>
          </div>
          <div className={styles.row}>
            <TextField
              label="Descrição"
              placeholder="Descreva o local"
              color="error"
              type="text"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              multiline
              rows={2}
              sx={{ width: 785 }}
              helperText={
                errors.descricao && <span>{errors.descricao.message}</span>
              }
              {...register("descricao")}
            />
          </div>
          <div className={styles.row}>
            <TextField
              label="CEP"
              placeholder="CEP"
              variant="outlined"
              color="error"
              type="text"
              InputLabelProps={{ shrink: true }}
              required
              sx={{ width: 390 }}
              helperText={errors.cep && <span>{errors.cep.message}</span>}
              {...register("cep", { onBlur: handleBlur })}
            />
            <TextField
              label="Endereço"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              color="error"
              disabled
              type="text"
              sx={{ width: 390 }}
              helperText={
                errors.endereco && <span>{errors.endereco.message}</span>
              }
              {...register("endereco", { value: rua })}
            />
          </div>
          <div className={styles.row}>
            <TextField
              label="Número"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              color="error"
              type="number"
              sx={{ width: 390 }}
              helperText={errors.numero && <span>{errors.numero.message}</span>}
              {...register("numero", { valueAsNumber: true })}
            />
            <TextField
              label="Cidade"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              color="error"
              disabled
              type="text"
              sx={{ width: 390 }}
              helperText={errors.cidade && <span>{errors.cidade.message}</span>}
              {...register("cidade", { value: cidade })}
            />
          </div>
          <div className={styles.row}>
            <TextField
              label="Complemento"
              placeholder="Ex.: bloco, apartamento, sala etc..."
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              color="error"
              type="text"
              sx={{ width: 785 }}
              helperText={
                errors.complemento && <span>{errors.complemento.message}</span>
              }
              {...register("complemento")}
            />
          </div>
          <div></div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: 785,
              height: 50,
              bgcolor: "#FF0A1B",
              "&:hover": { backgroundColor: "#F35359" },
            }}
          >
            {isSubmitting ? (
              <CircularProgress disableShrink sx={{ color: "#0F0F0F" }} />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </form>
      </div>
    </>
  );
}
