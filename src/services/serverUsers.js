//GET
export async function buscarUsuarios() {
  const resposta = await fetch("http://localhost:3000/users");
  const data = await resposta.json();
  if (data.erro) {
    throw new alert("Usuários não encontrado");
  }
  return data;
}

//GET 1
export async function buscarUmUsuarioId(id) {
  const resposta = await fetch(`http://localhost:3000/users/${id}`, {
    method: "GET",
  });
  const data = await resposta.json();
  if (data.erro) {
    throw new alert("Usuário não encontrado");
  }
  return data;
}

export async function buscarUmUsuarioEmail(email) {
  const resposta = await fetch(`http://localhost:3000/users/?email=${email}`, {
    method: "GET",
  });
  const data = await resposta.json();
  if (data.erro) {
    throw new alert("Usuário não encontrado");
  }
  return data;
}

// DELETE
export async function deletarUsuario(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  if (data.erro) {
    throw new alert("Usuário não deletado");
  }
  return data;
}

//POST
export async function criarUsuario(values) {
  const id = Number(await buscarUltimoUsuario()) + 1;
  const usuario = {
    id: String(id),
    nome: values.nome,
    data: values.data,
    email: values.email,
    endereco: values.endereco,
    cep: values.cep,
    complemento: values.complemento,
    cpf: values.cpf,
    numero: values.numero,
    senha: values.senha,
  };
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(usuario),
  });
  const data = await response.json();
  if (data.erro) {
    throw new alert("Usuário não adicionado");
  }
  return data;
}

//PUT
export async function atualizarUsuario(id, values) {
  const usuario = {
    id: id,
    nome: values.nome,
    data: values.data,
    email: values.email,
    endereco: values.endereco,
    cep: values.cep,
    complemento: values.complemento,
    cpf: values.cpf,
    numero: values.numero,
    senha: values.senha,
  };
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(usuario),
  });
  const data = await response.json();
  if (data.erro) {
    throw new alert("Usuário não adicionado");
  }
  return data;
}

export async function contarUsuarios() {
  const lista = await buscarUsuarios();
  const qtd = lista.length;
  return qtd;
}

export async function buscarUltimoUsuario() {
  const lista = await buscarUsuarios();
  if (lista.length === 0) {
    const id = 0;
    return id;
  } else {
    const id = lista.at(-1).id;
    return id;
  }
}

export async function validacaoEntradaUsuario(email, senha) {
  const response = await fetch(
    `http://localhost:3000/users/?email=${email}&senha=${senha}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  if (data.length === 1) {
    return [true, data];
  } else {
    return [false, data];
  }
}

export async function validacaoCpf(cpf) {
  const lista = await buscarUsuarios();
  const listaFiltrada = lista.filter((element) => element.cpf === cpf);
  if (listaFiltrada.length > 0) {
    return true;
  } else {
    return false;
  }
}

export async function validacaoEmail(email) {
  const lista = await buscarUmUsuarioEmail(email);
  const listaFiltrada = lista.filter((element) => element.email === email);
  if (listaFiltrada.length > 0) {
    return true;
  } else {
    return false;
  }
}
// Emxeplo de user para testes
// const usuario = {
//     nome: "Vitor Tavares",
//     data: "2015-07-01",
//     email: "vitor@vitor.com",
//     endereco: "Rua José Evaristo",
//     cep: "88705060",
//     complemento: "",
//     cpf: "12354697810",
//     numero: 25,
//     senha: "123456",
// }
