import { BookListItem } from "../models/BookListItem";

type Prop = {
  book: BookListItem;
  onBookSpineClick: (book: BookListItem) => void;
};

export const BookSpine: React.FC<Prop> = ({ book, onBookSpineClick }) => {
  return <div onClick={() => onBookSpineClick(book)}>{book.title}</div>;
};
