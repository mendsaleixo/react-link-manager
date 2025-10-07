# Gerenciador de Links - Aplicação CRUD com Full-Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

Solução full-stack completa para gerenciamento de links, desenvolvida para o processo seletivo **02400/2025 - Desenvolvedor Full-Stack Júnior** do SENAI/SC. A aplicação consiste em um backend **Node.js** com uma API RESTful e um frontend **React** para interação do usuário.

## Objetivo do Projeto

Este projeto foi construído para atender e demonstrar as competências técnicas exigidas na vaga de Desenvolvedor Full-Stack Júnior, aplicando as tecnologias e boas práticas sugeridas no descritivo do processo seletivo.

O foco foi entregar uma solução que cumpre os seguintes requisitos:

- **Desenvolvimento Full-Stack:** Construção de um backend robusto com **Node.js** e **Express**, e um frontend reativo com **React**.
- **Análise e Manutenção de Dados:** Utilização do **Prisma ORM** para modelagem, migração e manipulação segura dos dados em um banco de dados relacional.
- **Qualidade de Código:** Implementação de **testes unitários** com **Jest** no backend para garantir a confiabilidade da API.
- **Boas Práticas e Ferramentas Modernas:** Adoção de **Tailwind CSS** para estilização ágil no frontend e **Git/GitHub** com fluxo de _feature branches_ e commits semânticos para versionamento.

## Funcionalidades

A aplicação implementa todas as operações de um CRUD completo através de uma API RESTful:

- **API RESTful:** Backend com endpoints para criar, listar, atualizar e deletar links.
- **(Create)** Adicionar novos links através de um formulário.
- **(Read)** Visualizar a lista completa de links salvos.
- **(Update)** Editar o título e a URL de um link existente.
- **(Delete)** Excluir links de forma permanente.
- **Notificações (Toasts):** Feedback visual para o usuário após cada operação, melhorando a experiência de uso.

## Tecnologias e Ferramentas

- **Backend:**
  - **Node.js:** Ambiente de execução para o JavaScript no servidor.
  - **Express:** Framework para a construção da API RESTful, gerenciamento de rotas e middlewares.
  - **Prisma:** ORM para interação com o banco de dados, garantindo tipagem e segurança nas queries.
  - **Jest & Supertest:** Para a criação e execução de testes de integração da API.
- **Frontend:**
  - **React:** Biblioteca para construção da interface de usuário.
  - **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido.
  - **Tailwind CSS:** Framework de estilização CSS para desenvolvimento ágil e consistente.
  - **Axios:** Cliente HTTP para comunicação entre o frontend e a API do backend.
- **Banco de Dados:**
  - **SQLite:** Banco de dados leve e baseado em arquivo, ideal para desenvolvimento e testes.
- **Versionamento:**
  - **Git & GitHub:** Para controle de versão e hospedagem do código.

## Arquitetura e Conceitos Aplicados

- **Arquitetura Cliente-Servidor:** Clara separação de responsabilidades entre o frontend (apresentação) e o backend (lógica de negócio e dados).
- **API RESTful:** Design de endpoints seguindo os padrões do mercado (`GET`, `POST`, `PUT`, `DELETE`).
- **ORM (Object-Relational Mapping):** Abstração da camada de banco de dados com Prisma, incluindo _migrations_ para controle de versão do schema.
- **Arquitetura em Camadas (Backend):** Organização do código em Rotas, Controladores e Serviços para facilitar a manutenção.
- **Testes de API:** Validação dos endpoints para garantir que os contratos da API funcionem como esperado.
- **Componentização e Hooks (Frontend):** Uso de `useState` e `useEffect` para gerenciar estado e consumir a API.

## Como Executar Localmente

**Pré-requisitos:**

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [NPM](https://www.npmjs.com/) (versão 9 ou superior)

---

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/mendsaleixo/react-link-manager.git](https://github.com/mendsaleixo/react-link-manager.git)
    cd react-link-manager
    ```

2.  **Setup do Backend:**

    ```bash
    # Navegue até a pasta do servidor
    cd server

    # Instale as dependências
    npm install

    # Crie o banco de dados e execute as migrations do Prisma
    npx prisma migrate dev

    # Inicie o servidor backend (em um terminal)
    npm run dev
    # O servidor estará rodando em http://localhost:3333
    ```

3.  **Setup do Frontend:**

    ```bash
    # Em um novo terminal, navegue até a pasta do cliente
    cd client

    # Instale as dependências
    npm install

    # Inicie a aplicação React (neste segundo terminal)
    npm run dev
    # A aplicação estará disponível em http://localhost:5173
    ```

4.  **Acesse a aplicação:**
    - Abra seu navegador e acesse `http://localhost:5173`.

### Como Executar os Testes

Para verificar a integridade da API, execute os testes no backend:

```bash
# Na pasta /server
npm test
```
