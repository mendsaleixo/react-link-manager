# Gerenciador de Links - Aplicação CRUD com React e Supabase

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

Aplicação web completa para gerenciamento de links (favoritos), construída com uma stack moderna para demonstrar os fundamentos do desenvolvimento frontend profissional.

**[➡️ Acessar a demonstração ao vivo](URL_DO_SEU_DEPLOY_AQUI)**

*(Sugestão: faça o deploy do seu projeto em plataformas gratuitas como Vercel ou Netlify e coloque o link aqui.)*

![Demonstração da Aplicação](caminho/para/seu/demo.gif)

*(Sugestão: grave um GIF curto mostrando as funcionalidades principais: adicionar, marcar como lido, editar e deletar. Isso chama muito mais a atenção de um recrutador do que uma imagem estática.)*

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como o segundo passo em uma jornada de aprendizado, servindo como uma evolução direta de uma [aplicação similar construída com JavaScript puro](URL_DO_SEU_PROJETO_VANILLA_JS_AQUI). O objetivo principal foi solidificar os conceitos fundamentais do **React** e do **TypeScript**, compreendendo na prática os problemas que essas tecnologias resolvem em comparação com a manipulação manual do DOM.

O foco foi construir uma aplicação que seguisse as melhores práticas do mercado, incluindo:
* **Arquitetura baseada em componentes:** Quebrar a UI em pedaços lógicos e reutilizáveis.
* **Gerenciamento de estado declarativo:** Utilizar o estado do React como a única fonte da verdade para a UI.
* **Comunicação com um backend real:** Interagir com uma API REST persistente (Supabase), incluindo autenticação e regras de segurança.

## ✨ Funcionalidades

A aplicação implementa todas as operações de um CRUD completo:

* **(Create)** Adicionar novos links através de um formulário em um modal.
* **(Read)** Visualizar a lista de links salvos, carregada a partir do banco de dados.
* **(Update)**
    * Marcar links como "lidos" ou "não lidos".
    * Editar as informações de um link (título, URL, categoria) através de um modo de edição.
* **(Delete)** Excluir links de forma permanente, com uma caixa de diálogo de confirmação.

## 🛠️ Tecnologias e Ferramentas

* **Frontend:**
    * **React:** Biblioteca para construção da interface de usuário de forma declarativa e baseada em componentes.
    * **TypeScript:** Para adicionar tipagem estática ao JavaScript, garantindo maior segurança e clareza ao código.
    * **Vite:** Ferramenta de build moderna e ultrarrápida para o ambiente de desenvolvimento.
* **Backend (BaaS - Backend as a Service):**
    * **Supabase:** Plataforma open-source que fornece:
        * Um banco de dados **PostgreSQL** real e persistente.
        * Uma **API REST** gerada automaticamente para interagir com o banco de dados.
        * **Row Level Security (RLS)** para configurar regras de acesso e proteger os dados.
* **Estilização:**
    * **CSS Moderno:** Utilização de Flexbox, Grid e Variáveis CSS para um design responsivo e de fácil manutenção.
* **Versionamento:**
    * **Git & GitHub:** Para controle de versão e hospedagem do código.

## 🧠 Principais Conceitos Aplicados

* **Hooks do React:** Uso prático de `useState` para gerenciamento de estado e `useEffect` para lidar com efeitos colaterais (data fetching).
* **Componentização:** Divisão da UI em componentes reutilizáveis (`<LinkList>`, `<LinkForm>`, `<LinkItem>`, `<Modal>`).
* **Fluxo de Dados Unidirecional:** Passagem de dados e funções via **Props**.
* **Padrões de Design do React:**
    * **Lifting State Up (Elevar o Estado):** Para compartilhar o estado entre componentes irmãos.
    * **Componentes Controlados:** Para gerenciamento de formulários.
* **Renderização Condicional:** Para exibir diferentes UIs com base no estado (ex: modo de visualização vs. modo de edição).
* **Comunicação com APIs:** Uso de `async/await` com a `Fetch API` para realizar operações CRUD em um ambiente React.
* **Segurança de Backend (Básico):** Configuração de políticas de **RLS** no Supabase para permitir operações de `SELECT`, `INSERT`, `UPDATE` e `DELETE` de forma segura.

## 🚀 Como Executar Localmente

Para executar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/react-link-manager.git](https://github.com/seu-usuario/react-link-manager.git)
    cd react-link-manager
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo chamado `.env.local` na raiz do projeto.
    * Copie o conteúdo do arquivo `.env.example` (se você o criou) ou adicione as seguintes variáveis:

    ```
    VITE_SUPABASE_URL="URL_DO_SEU_PROJETO_SUPABASE"
    VITE_SUPABASE_ANON_KEY="SUA_CHAVE_ANON_PUBLIC_AQUI"
    ```
    * Você pode encontrar esses valores no painel do seu projeto Supabase, em **Project Settings > API**.

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:5173](http://localhost:5173) (ou a URL que aparecer no seu terminal) no seu navegador.

---
**Observação de Segurança:** O arquivo `.env.local` não deve ser enviado para o GitHub. Certifique-se de que ele está listado no seu arquivo `.gitignore`.
