import { useState } from "react";

function LinkItem({
  link,
  onToggleLido,
  onDeleteLink,
  isEditing,
  setEditingLinkId,
  onUpdateLink,
}) {
  if (!link) {
    return null;
  }

  const [editedTitulo, setEditedTitulo] = useState(link.titulo);
  const [editedUrl, setEditedUrl] = useState(link.url);
  const [editedCategoria, setEditedCategoria] = useState(link.categoria);

  const handleSave = () => {
    const updatedData = {
      titulo: editedTitulo.trim(),
      url: editedUrl.trim(),
      categoria: editedCategoria.trim(),
    };

    if (!updatedData.titulo || !updatedData.url || !updatedData.categoria) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    }

    onUpdateLink(link.id, updatedData);

    setEditingLinkId(null);
  };

  //Visualização em modo edição
  if (isEditing) {
    return (
      <li className="link-item editing">
        <div className="edit-inputs">
          <input
            type="text"
            value={editedTitulo}
            onChange={(e) => setEditedTitulo(e.target.value)}
            placeholder="Título"
          />
          <input
            type="text"
            value={editedUrl}
            onChange={(e) => setEditedUrl(e.target.value)}
            placeholder="URL"
          />
          <input
            type="text"
            value={editedCategoria}
            onChange={(e) => setEditedCategoria(e.target.value)}
            placeholder="Categoria"
          />
        </div>
        <div className="edit-actions">
          <button onClick={handleSave}>Salvar</button>
          <button className="cancel-btn" onClick={() => setEditingLinkId(null)}>
            Cancelar
          </button>
        </div>
      </li>
    );
  }

  // Visualização normal
  return (
    <li className={`link-item ${link.lido ? "completa" : ""}`}>
      <div className="link-info">
        <input
          type="checkbox"
          checked={!!link.lido}
          onChange={() => onToggleLido(link.id)}
        />
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.titulo}
        </a>
        <span className="categoria">{link.categoria}</span>
      </div>
      <div className="link-actions">
        <button onClick={() => setEditingLinkId(link.id)}>Editar</button>
        <button className="delete-btn" onClick={() => onDeleteLink(link.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}

export default LinkItem;
