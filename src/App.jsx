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

  const handleAddNewLink = async (newLinkData) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLinkData),
      });

      if (!response.ok) {
        throw new Error("Falha ao adicionar o novo link.");
      }

      const newLink = await response.json();

      setLinks([...links, newLink]);
    } catch (error) {
      console.error(error);
      alert("Não foi possível salvar o novo link.");
    }
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
