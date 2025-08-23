import LinkItem from "./LinkItem";
function LinkList({
  links,
  onToggleRead,
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
          onToggleRead={onToggleRead}
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
