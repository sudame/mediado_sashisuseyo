import { BookListItem } from "../../models/BookListItem";
import "./style.scss";

type Prop = {
  book: BookListItem;
  onBookSpineClick: (book: BookListItem) => void;
};

export const BookSpine: React.FC<Prop> = ({ book, onBookSpineClick }) => {
  return (
    <div className="book-spine-wrapper" onClick={() => onBookSpineClick(book)}>
      <p className="book-spine-title">{book.title}</p>
    </div>
  );
};
