import React, { useEffect, useState } from "react";
import { getBookByID } from "../../api/BookAPI";
import { Book } from "../../models/Book";
import "./style.scss";

type PanelProp = {
  book: Book;
  onCloseModal?: () => void;
};

const BookInfoModalPanel: React.FC<PanelProp> = ({ book, onCloseModal }) => {
  const modifyNewLine = (text: string) => text.replaceAll("\\n", "\n");

  return (
    <div
      className="book-info-panel"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="book-info-panel--close-button"
        onClick={onCloseModal}
        autoFocus={true}
      >
        ✕
      </button>
      <div className="book-info-panel--left">
        <div className="book-info-panel--image">
          {book.image ? <img src={book.image} alt="本の表紙" /> : null}
        </div>
      </div>
      <div className="book-info-panel--right">
        <div className="book-info-panel--title">{book.title}</div>
        <div className="book-info-panel--author">{book.author}</div>
        <div className="book-info-panel--description">
          {modifyNewLine(book.description)}
        </div>
      </div>
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

  // escキーが押されたらモーダルを閉じる
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    };

    document.addEventListener("keydown", listener);

    return document.removeEventListener("keydown", listener);
  }, [onCloseModal]);

  return (
    <div className="book-info-modal-wrapper" onClick={onCloseModal}>
      <div className="book-info-modal">
        {bookInfo ? (
          <BookInfoModalPanel book={bookInfo} onCloseModal={onCloseModal} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
