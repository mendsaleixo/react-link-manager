function LinkItem({ link }) {
  return (
    <li key={link.id}>
      <div className="task-content">
        <input type="checkbox" />
        <span>{link.titulo} ({link.categoria})</span>
      </div>
      <button className="delete-btn">
        Excluir
      </button>
    </li>
  );
}

export default LinkItem;