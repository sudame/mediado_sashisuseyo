import React, { useState } from "react";
import { BookListItem } from "../../models/BookListItem";
import { BookInfoModal } from "../BookInfoModal";
import { useBookList } from "../hooks/useBookList";
import { Tanaita } from "../Tanaita";
import "./style.css";

export const BookShelf: React.FC = () => {
  const bookList = useBookList();

  const [targetBookId, setTargetBookId] = useState<string | null>(null);

  const handleBookSpineClick = (book: BookListItem) => {
    setTargetBookId(book.id);
  };

  const handleCloseModal = () => {
    setTargetBookId(null);
  };

  return (
    <>
      <div className="book-shelf-size book-shelf-bg">
        <Tanaita bookList={bookList} onBookSpineClick={handleBookSpineClick} />
        {targetBookId ? (
          <BookInfoModal
            bookId={targetBookId}
            onCloseModal={handleCloseModal}
          />
        ) : null}
      </div>
    </>
  );
};
