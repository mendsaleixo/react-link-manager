import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Modal from "./components/Modal";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import {
  getAllLinks,
  createLink,
  updateLink,
  deleteLink,
} from "./services/api";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLinkId, setEditingLinkId] = useState(null);

  useEffect(() => {
    getAllLinks()
      .then((data) => setLinks(data))
      .catch((error) => toast.error(error.message));
  }, []);

  const handleAddNewLink = async (newLinkData) => {
    try {
      await createLink(newLinkData);
      const data = await getAllLinks();
      setLinks(data);
      setIsModalOpen(false);
      toast.success("Link adicionado com sucesso!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleToggleRead = async (idToToggle) => {
    const linkToUpdate = links.find((link) => link.id === idToToggle);
    if (!linkToUpdate) return;

    const updatedData = { read: !linkToUpdate.read };

    try {
      await updateLink(idToToggle, updatedData);
      setLinks(
        links.map((link) =>
          link.id === idToToggle ? { ...link, ...updatedData } : link
        )
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  // As funções de update e delete também usariam as funções do serviço...
  // (O código completo e correto está aqui)

  const handleUpdateLink = async (idToUpdate, updatedData) => {
    try {
      await updateLink(idToUpdate, updatedData);
      setLinks(
        links.map((link) =>
          link.id === idToUpdate ? { ...link, ...updatedData } : link
        )
      );
      toast.success("Link atualizado!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteLink = async (idToDelete) => {
    try {
      await deleteLink(idToDelete); // <-- Usa a função do serviço
      setLinks(links.filter((link) => link.id !== idToDelete));
      toast.success("Link excluído!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="app-container">
      <Toaster position="top-right" />
      <header className="app-header">
        <h1>Gerenciador de Links</h1>
        <button className="primary-button" onClick={() => setIsModalOpen(true)}>
          Adicionar Novo Link
        </button>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LinkForm onAddNewLink={handleAddNewLink} />
      </Modal>
      <LinkList
        links={links}
        onToggleRead={handleToggleRead}
        onDeleteLink={handleDeleteLink}
        editingLinkId={editingLinkId}
        setEditingLinkId={setEditingLinkId}
        onUpdateLink={handleUpdateLink}
      />
    </div>
  );
}

export default App;
