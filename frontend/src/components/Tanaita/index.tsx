import React from "react";
import { BookListItem } from "../../models/BookListItem";
import { BookSpine } from "../BookSpine";
import "./style.css";

type Prop = {
  bookList: BookListItem[];
  onBookSpineClick: (book: BookListItem) => void;
};

export const Tanaita: React.FC<Prop> = ({ bookList, onBookSpineClick }) => {
  return (
    <>
      {bookList.map((book) => {
        return (
          <BookSpine
            key={book.id}
            book={book}
            onBookSpineClick={onBookSpineClick}
          ></BookSpine>
        );
      })}
      <div className="tanaita tanaita-style"></div>
    </>
  );
};
