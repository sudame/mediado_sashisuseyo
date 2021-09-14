import React from "react";
import { useBookList } from "../hooks/useBookList";
import { Tanaita } from "../Tanaita";
import "./style.css";

export const BookShelf: React.FC = () => {
  const bookList = useBookList();

  return (
    <>
      {/* tanaita に booklist を渡す */}
      <div className="book-shelf-size book-shelf-bg ">
        <Tanaita bookList={bookList} />
      </div>
    </>
  );
};
