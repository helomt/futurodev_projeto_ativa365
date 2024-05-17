const url = import.meta.env.VITE_URL_API_CEP

export async function buscarEndereco(cep) {
  const response = await fetch(url+`/${cep}/json/`);
  const data = await response.json();
  if (data.erro) {
    throw new alert("CEP não encontrado");
  }
  return data;
}
