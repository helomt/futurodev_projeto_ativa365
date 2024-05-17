![Logo](src\assets\images\logo.png)

<h1 align="center">Ativa 365</h1>
<p align="center"> <strong> Projeto avaliativo referente ao Módulo 1 - FuturoDev Tubarão V2 </p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

<div align="center">

[Sobre o projeto](#sobre-o-projeto) • [Funcionalidades ](#funcionalidades) • [Layout](#layout) • [Como executar](#como-executar-o-projeto) • [Tecnologias](#️tecnologias) • [Melhorias](#melhorias) • [Referência](#referência) • [Autora](#️autora) • [Licença](#licença)

</div>

## 💻Sobre o projeto

**Ativa 365** - é uma plataforma que facilita o gerenciamento de exercícios e locais para atividades físicas serem praticadas. Os usuários podem cadastrar novos locais de exercícios, encontrar pontos próximos em um mapa interativo (ou lista), visualizar informações sobre os os exercícios em cada ponto e registrar suas próprias contribuições para o sistema.

## Funcionalidades

- Cadastro de novo usuário
- Cadastro de novo local de exercício
- Dashboard com contador de totais cadastrados
- Lista de todos os locais cadastrados
- Edição e exclusão de locais cadastrados
- Página de login
- Função de cadastro de usuário sem repetir cpf e email

## 🎨Layout

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### Demonstração

Insira um gif ou um link de alguma demonstração

#### Documentação de cores

<img src="src\assets\images\paleta.png" alt="Paleta"/>

A paleta de cores utilizada no projeto foi gerada no site Coolors https://coolors.co/ e testada e todas as questões de contraste e acessibilidade

## 🚀Como executar o projeto

Podemos considerar este projeto como sendo divido em duas partes:

1. Back End (arquivo serve.json)
2. Front End

### 📋Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com)
[Node.js](https://nodejs.org/en).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### ⚙️Rodando localmente o servidor

Clone o projeto

```bash
  git clone https://github.com/helomt/futurodev_projeto_ativa365.git
```

Entre no diretório do projeto

```bash
  cd futurodev_projeto_ativa365
```

Inicie o servidor

```bash
  npm run server
```

O servidor inciará na porta:300 - acesse http://localhost:3000

### 🧭Rodando a aplicação web

```bash
# Instale as dependências
 npm install

```

Esse comando irá ler o arquivo `package.json` e instalar todas as dependências necessárias para o projeto.

Execute a aplicação em modo de desenvolvimento

```
  npm run dev
```

A aplicação será aberta na porta:5173 - acesse http://localhost:5173

#### Variáveis de Ambiente

O projeto exige algumas variáveis de ambiente que foram mantidas para a correção do mesmo e podem ser encontradas no arquivo ` .env`


## 🛠️Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Material UI](https://mui.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Helmet](https://www.npmjs.com/package/react-helmet)
- [Json Server](https://www.npmjs.com/package/json-server)

## 🚩Melhorias

Melhorias que ainda podem ser aplicadas:

- Melhorar a responsividade
- Adicionar a funcionalidade de mapas
- Página edição de cadastro
- Função de exclusão do app
- Função de recuperar senha
- Função de buscar cep
- Dark e Light mode


## Referências
- [Via Cep](https://viacep.com.br/)
- [Imagens diversas](https://unsplash.com/pt-br)
- [Edição e criação de logos](https://www.canva.com/)
- [Gerar paleta de cores](https://coolors.co/)
- [Inspiração e referências](https://dribbble.com/)
  

## 🐱‍👤Autora

[<img src="https://avatars.githubusercontent.com/helomt" width=115><br><sub>Heloisa Tavares</sub>](https://github.com/helomt)

<br>

<a target="_blank" href="https://www.linkedin.com/in/heloisamtavares/"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></img></a>
<a target="_blank" href="mailto:heloisamt@gmail.com"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white"></img></a>

#### Licença

The [MIT License](https://choosealicense.com/licenses/mit/)

Copyright :copyright: 2024 - Projeto Ativa365
