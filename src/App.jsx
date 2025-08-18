// Arquivo: src/App.jsx

import { useState, useEffect } from "react";
import LinkList from "./components/LinkList";
import LinkForm from "./components/LinkForm";

// 1. Defina suas constantes da API no topo
const apiUrl = "https://ntraydvhubcxyjyfomjx.supabase.co/rest/v1/links";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50cmF5ZHZodWJjeHlqeWZvbWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NjkxMjMsImV4cCI6MjA3MTA0NTEyM30.7Y_-eA9tv5fzwsFoFsDBWgKJ33agQW8v_jhDf3ogTDU";
const apiHeaders = {
  apikey: apiKey,
  Authorization: `Bearer ${apiKey}`,
};

function App() {
  const [links, setLinks] = useState([]);

  const buscarLinks = async () => {
    try {
      const response = await fetch(`${apiUrl}?select=*&order=created_at.desc`, {
        headers: apiHeaders,
      });
      if (!response.ok) {
        throw new Error("Falha ao buscar os links da API.");
      }
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      console.error("Erro em buscarLinks:", error);
    }
  };

  useEffect(() => {
    buscarLinks();
  }, []);

  const handleAddNewLink = async (newLinkData) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          ...apiHeaders,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLinkData),
      });

      if (!response.ok) {
        throw new Error("Falha ao adicionar o novo link.");
      }

      buscarLinks();
    } catch (error) {
      console.error("Erro em handleAddNewLink:", error);
      alert("Não foi possível salvar o novo link.");
    }
  };

  return (
    <div>
      <h1>Gerenciador de Links</h1>
      <LinkForm onAddNewLink={handleAddNewLink} />
      <LinkList links={links} /* props para update e delete virão aqui */ />
    </div>
  );
}

export default App;
