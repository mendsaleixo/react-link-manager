function LinkItem({ link, onToggleLido, onDeleteLink }) {
  if (!link) {
    return null;
  }

  const liClassName = link.lido ? "completa" : "";

  return (
    <li className={liClassName}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={!!link.lido}
          onChange={() => onToggleLido(link.id)}
        />
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.titulo}
        </a>
        <span>({link.categoria})</span>
      </div>
      <button className="delete-btn" onClick={() => onDeleteLink(link.id)}>
        Excluir
      </button>
    </li>
  );
}

export default LinkItem;
