import LinkItem from "./LinkItem";
function LinkList({
  links,
  onToggleLido,
  onDeleteLink,
  editingLinkId,
  setEditingLinkId,
  onUpdateLink,
}) {
  return (
    <ul className="link-list">
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
          onToggleLido={onToggleLido}
          onDeleteLink={onDeleteLink}
          isEditing={link.id === editingLinkId}
          setEditingLinkId={setEditingLinkId}
          onUpdateLink={onUpdateLink}
        />
      ))}
    </ul>
  );
}
export default LinkList;
