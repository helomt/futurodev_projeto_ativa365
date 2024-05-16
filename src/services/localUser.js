export function getLocalUserName() {
    const userStorage = localStorage.getItem("@ativa365:user");
    if (userStorage) {
      const userConvertido = JSON.parse(userStorage);
      return userConvertido[0].nome;
    }
    return alert("Nenhum usuário encontrado");
  }