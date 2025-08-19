import LinkItem from "./LinkItem";

function LinkList({
  links,
  onToggleLido,
  onDeleteLink,
  editingLinkId,
  setEditingLinkId,
}) {
  return (
    <ul>
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
          onToggleLido={onToggleLido}
          onDeleteLink={onDeleteLink}
          isEditing={link.id === editingLinkId}
          setEditingLinkId={setEditingLinkId}
        />
      ))}
    </ul>
  );
}

export default LinkList;
