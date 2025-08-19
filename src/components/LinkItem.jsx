function LinkItem({ link, onToggleLido, onDeleteLink }) {
  if (!link) {
    return null;
  }

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
      <button className="delete-btn" onClick={() => onDeleteLink(link.id)}>
        Excluir
      </button>
    </li>
  );
}

export default LinkItem;
