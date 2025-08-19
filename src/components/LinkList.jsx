import LinkItem from "./LinkItem";

function LinkList({ links, onToggleLido, onDeleteLink }) {
  return (
    <ul>
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
          onToggleLido={onToggleLido}
          onDeleteLink={onDeleteLink}
        />
      ))}
    </ul>
  );
}

export default LinkList;
