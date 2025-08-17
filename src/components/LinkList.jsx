import LinkItem from "./LinkItem";

function LinkList({ links }) {
  return (
    <ul>
      <LinkItem key={link.id} link={link} />
    </ul>
  );
}

export default LinkList;
