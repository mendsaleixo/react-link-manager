// Arquivo: src/App.jsx

import { useState, useEffect } from "react";
import LinkList from "./components/LinkList";
import LinkForm from "./components/LinkForm";

const apiUrl =
  "https://my-json-server.typicode.com/mendsaleixo/link-manager-api/links";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Falha ao buscar os links da API.");
        }
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLinks();
  }, []);

  const handleAddNewLink = (newLinkData) => {
    console.log("Novo link recebido no componente App:", newLinkData);
    // (Aqui, no futuro, faremos a chamada para a API)
  };

  return (
    <div>
      <h1>Gerenciador de Links</h1>
      <LinkForm onAddNewLink={handleAddNewLink} />
      <LinkList links={links} />
    </div>
  );
}

export default App;
