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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      atividade: "",
      complemento:"",
      cidade:"",
      endereco:"",
      descricao:"",
      numero:0,
    },
    resolver: zodResolver(schema),
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
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
            variant="outlined"
            color="error"
            type="text"
            required
            sx={{ width: 390 }}
            helperText={errors.nome && <span>{errors.nome.message}</span>}
            {...register("nome")}
          />
          <div>
            <FormControl required color="error">
              <InputLabel id="atividade">Atividade</InputLabel>
              <Select
                labelId="atividade"
                label="Atividade"
                color="error"
                defaultValue={''}
                sx={{ width: 390 }}
                
                {...register("atividade")}
              >
                {listaDePraticas.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.atividade && <span>{errors.atividade.message}</span>}</FormHelperText>
            </FormControl>
          </div>
        </div>
        <div className={styles.row}>
          <TextField
            label="Descrição"
            color="error"
            type="text"
            variant="outlined"
            multiline
            rows={2}
            sx={{ width: 785 }}
            helperText= {errors.descricao && <span>{errors.descricao.message}</span>}
            {...register("descricao")}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="CEP"
            variant="outlined"
            color="error"
            type="text"
            required
            sx={{ width: 390 }}
            helperText= {errors.cep && <span>{errors.cep.message}</span>}
            {...register("cep")}
          />
          <TextField
            label="Endereço"
            variant="outlined"
            color="error"
            type="text"
            sx={{ width: 390 }}
            helperText= {errors.endereco && <span>{errors.endereco.message}</span>}
            {...register("endereco")}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="Número"
            variant="outlined"
            color="error"
            type="number"
            sx={{ width: 390 }}
            helperText= {errors.numero && <span>{errors.numero.message}</span>}
            {...register("numero", {valueAsNumber: true})}
          />
          <TextField
            label="Cidade"
            variant="outlined"
            color="error"
            type="text"
            sx={{ width: 390 }}
            helperText= {errors.cidade && <span>{errors.cidade.message}</span>}
            {...register("cidade")}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="Complemento"
            placeholder="Ex.: bloco, apartamento, sala etc..."
            variant="outlined"
            color="error"
            type="text"
            sx={{ width: 785 }}
            helperText= {errors.complemento && <span>{errors.complemento.message}</span>}
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
          {isSubmitting ? <CircularProgress /> : "Cadastrar"}
          
        </Button>
      </form>
    </div>
  );
}
