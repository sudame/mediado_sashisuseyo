import React from "react";
import { useBookList } from "./hooks/useBookList";

export const BookShelf: React.FC = () => {
  const bookList = useBookList();

  return (
    <>
      {/* tanaita に booklist を渡す */}
      <div>
        {bookList.map((data) => (
          <div key={data.id}>
            <div>{data.id}</div>
            <div>{data.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};
