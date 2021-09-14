import React from "react";

type Prop = {
  bookId: string;
  onCloseModal: () => void;
};

export const BookInfoModal: React.FC<Prop> = ({ bookId, onCloseModal }) => {
  return (
    <div className="book-info-modal-wrapper">
      <div className="book-info-modal">
        <div className="book-info-modal--close" onClick={onCloseModal}>
          X
        </div>
        {bookId}
      </div>
    </div>
  );
};
