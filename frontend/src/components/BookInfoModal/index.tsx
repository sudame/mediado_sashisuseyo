import React, { useEffect, useState } from "react";
import { getBookByID } from "../../api/BookAPI";
import { Book } from "../../models/Book";

type PanelProp = {
  book: Book;
};

const BookInfoModalPanel: React.FC<PanelProp> = ({ book }) => {
  return (
    <div className="book-info-panel">
      <div className="book-info-panel--title">{book.title}</div>
      <div className="book-info-panel--image">
        {book.image ? <img src={book.image} alt="本の表紙" /> : null}
      </div>
      <div className="book-info-panel--title">{book.author}</div>
      <div className="book-info-panel--title">{book.description}</div>
    </div>
  );
};

type Prop = {
  bookId: string;
  onCloseModal: () => void;
};

export const BookInfoModal: React.FC<Prop> = ({ bookId, onCloseModal }) => {
  const [bookInfo, setBookInfo] = useState<Book>();

  const _getBookInfo = async (bookId: string) => {
    setBookInfo(await getBookByID("1", bookId));
  };

  useEffect(() => {
    _getBookInfo(bookId);
  }, [bookId]);

  return (
    <div className="book-info-modal-wrapper">
      <div className="book-info-modal">
        <div className="book-info-modal--close" onClick={onCloseModal}>
          X
        </div>
        {bookInfo ? (
          <BookInfoModalPanel book={bookInfo} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
