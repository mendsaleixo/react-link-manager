// Arquivo: src/components/LinkList.tsx

import type { LinkType } from "../types";

type LinkListProps = {
  links: LinkType[];
};

function LinkList({ links }: LinkListProps) {
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
