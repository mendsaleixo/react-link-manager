function LinkList({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.titulo}
          </a>
          <span> ({link.categoria})</span>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;