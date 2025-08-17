// Arquivo: src/components/LinkList.jsx

import LinkItem from "./LinkItem";

function LinkList({ links, onToggleLido }) {
  return (
    <ul>
      {links.map((link) => (
        <LinkItem key={link.id} link={link} onToggleLido={onToggleLido} />
      ))}
    </ul>
  );
}

export default LinkList;
