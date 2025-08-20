import { useState, useEffect } from "react";
import LinkList from "./components/LinkList";
import LinkForm from "./components/LinkForm";
import "./App.css";
import Modal from "./components/Modal";

const apiUrl = "https://ntraydvhubcxyjyfomjx.supabase.co/rest/v1/links";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50cmF5ZHZodWJjeHlqeWZvbWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NjkxMjMsImV4cCI6MjA3MTA0NTEyM30.7Y_-eA9tv5fzwsFoFsDBWgKJ33agQW8v_jhDf3ogTDU";
const apiHeaders = {
  apikey: apiKey,
  Authorization: `Bearer ${apiKey}`,
};

function App() {
  const [links, setLinks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLinkId, setEditingLinkId] = useState(null);

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

  /*Adiciona novo link */
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
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro em handleAddNewLink:", error);
      alert("Não foi possível salvar o novo link.");
    }
  };

  /* Marca o link como lido */
  const handleToggleLido = async (idToToggle) => {
    const linkToUpdate = links.find((link) => link.id === idToToggle);

    if (!linkToUpdate) return;

    const updatedLink = {
      ...linkToUpdate,
      lido: !linkToUpdate.lido,
    };

    try {
      const response = await fetch(`${apiUrl}?id=eq.${idToToggle}`, {
        method: "PATCH",
        headers: {
          ...apiHeaders,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lido: updatedLink.lido }),
      });

      if (!response.ok) {
        throw new Error("Falha ao atualizar o status do link na API.");
      }

      setLinks(
        links.map((link) => (link.id === idToToggle ? updatedLink : link))
      );
    } catch (error) {
      console.error("Erro ao atualizar link:", error);
      alert("Não foi possível atualizar o link. Tente novamente.");
    }
  };

  /**Atualiza os dados de um link da lista */
  const handleUpdateLink = async (idToUpdate, updatedData) => {
    try {
      const response = await fetch(`${apiUrl}?id=eq.${idToUpdate}`, {
        method: "PATCH",
        headers: { ...apiHeaders, "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Falha ao atualizar o link na API.");
      }

      setLinks(
        links.map((link) =>
          link.id === idToUpdate ? { ...link, ...updatedData } : link
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar link:", error);
      alert("Não foi possível atualizar o link.");
    }
  };

  /*Apaga um link da lista*/
  const handleDeleteLink = async (idToDelete) => {
    if (!window.confirm("Tem certeza que deseja excluir este link?")) {
      return;
    }

    try {
      const response = await fetch(`${apiUrl}?id=eq.${idToDelete}`, {
        method: "DELETE",
        headers: apiHeaders,
      });

      if (!response.ok) {
        throw new Error("Falha ao excluir o link na API.");
      }

      setLinks(links.filter((link) => link.id !== idToDelete));
      console.log(`Link com ID ${idToDelete} excluído com sucesso.`);
    } catch (error) {
      console.error(error);
      alert("Não foi possível excluir o link.");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gerenciador de Links</h1>
        <button className="primary-button" onClick={() => setIsModalOpen(true)}>
          Adicionar Novo Link
        </button>
      </header>
      <LinkList
        links={links}
        onToggleLido={handleToggleLido}
        onDeleteLink={handleDeleteLink}
        editingLinkId={editingLinkId}
        setEditingLinkId={setEditingLinkId}
        onUpdateLink={handleUpdateLink}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LinkForm onAddNewLink={handleAddNewLink} />
      </Modal>
    </div>
  );
}

export default App;
