// Arquivo: src/components/LinkItem.jsx

import { useState } from "react";

function LinkItem({
  link,
  onToggleLido,
  onDeleteLink,
  isEditing,
  setEditingLinkId,
}) {
  if (!link) {
    return null;
  }

  const [editedTitulo, setEditedTitulo] = useState(link.titulo);
  const [editedUrl, setEditedUrl] = useState(link.url);
  const [editedCategoria, setEditedCategoria] = useState(link.categoria);

  /**Visualização em modo edição */
  if (isEditing) {
    return (
      <li className="link-item editing">
        <div className="edit-inputs">
          <input
            type="text"
            value={editedTitulo}
            onChange={(e) => setEditedTitulo(e.target.value)}
          />
          <input
            type="text"
            value={editedUrl}
            onChange={(e) => setEditedUrl(e.target.value)}
          />
          <input
            type="text"
            value={editedCategoria}
            onChange={(e) => setEditedCategoria(e.target.value)}
          />
        </div>
        <div className="edit-actions">
          <button>Salvar</button>
          <button className="cancel-btn" onClick={() => setEditingLinkId(null)}>
            Cancelar
          </button>
        </div>
      </li>
    );
  }

  /**Visualização modo normal*/
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
