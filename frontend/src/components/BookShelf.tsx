import React, { useState } from "react";
import { BookListItem } from "../models/BookListItem";
import { BookInfoModal } from "./BookInfoModal";
import { useBookList } from "./hooks/useBookList";
import { Tanaita } from "./Tanaita";

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
      <div>
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
