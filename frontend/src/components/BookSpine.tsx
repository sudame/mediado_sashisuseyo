import { BookListItem } from "../models/BookListItem";

type Prop = {
  book: BookListItem;
};

export const BookSpine: React.FC<Prop> = ({ book }) => {
  return <div>{book.title}</div>;
};
