export async function buscarEndereco(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  if (data.erro) {
    throw new alert("CEP não encontrado");
  }
  return data;
}
