// GET
export async function buscarLocais() {
  const resposta = await fetch("http://localhost:3000/locais");
  const data = await resposta.json();
  if (data.erro) {
    throw new alert("Locais não encontrado");
  }
  return data;
}

//GET 1
export async function buscarUmLocal(id) {
  const resposta = await fetch(`http://localhost:3000/locais/${id}`, {
    method: "GET",
  });
  const data = await resposta.json();
  if (data.erro) {
    throw new alert("Local não encontrado");
  }
  return data;
}

// DELETE
export async function deletarLocal(id) {
  const response = await fetch(`http://localhost:3000/locais/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  if (data.erro) {
    throw new alert("Local não deletado");
  }
  return data;
}

//POST
export async function criarLocal(values, username) {
  const id = Number(await buscarUltimoLocal()) + 1;
  const local = {
    id: String(id),
    nome: values.nome,
    atividade: values.atividade,
    descricao: values.descricao,
    endereco: values.endereco,
    cep: values.cep,
    complemento: values.complemento,
    cidade: values.cidade,
    numero: values.numero,
    username: username,
  };
  const response = await fetch("http://localhost:3000/locais", {
    method: "POST",
    body: JSON.stringify(local),
  });
  const data = await response.json();
  if (data.erro) {
    throw new alert("Local não adicionado");
  }
  return data;
}

//PUT
export async function atualizarLocal(id, values, username) {
  const local = {
    id: id,
    nome: values.nome,
    atividade: values.atividade,
    descricao: values.descricao,
    endereco: values.endereco,
    cep: values.cep,
    complemento: values.complemento,
    cidade: values.cidade,
    numero: values.numero,
    username: username,
  };
  const response = await fetch(`http://localhost:3000/locais/${id}`, {
    method: "PUT",
    body: JSON.stringify(local),
  });
  const data = await response.json();
  if (data.erro) {
    throw new alert("Local não atualizado");
  }
  return data;
}

export async function contarLocais() {
  const lista = await buscarLocais();
  const qtd = lista.length;
  return qtd;
}

export async function buscarUltimoLocal() {
  const lista = await buscarLocais();
  if (lista.length === 0) {
    const id = 0;
    return id;
  } else {
    const id = lista.at(-1).id;
    return id;
  }
}

// var local = {
//   nome: "Plenum",
//   atividade: "Escalada",
//   descricao: "",
//   endereco: "Rua José",
//   cep: "88705060",
//   complemento: "",
//   localidade: "Tubarão",
//   numero: 25,
// }

// var userName = "Heloisa Tavares"
// console.log(await criarLocal(local,userName))

// // console.log(await buscarUmLocal("1"));
