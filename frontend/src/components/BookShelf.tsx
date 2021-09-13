import React, { useEffect, useState } from "react";
import { getBookList } from "../api/BookAPI";
import { BookListItem } from "../models/BookListItem";

export const BookShelf: React.FC = () => {
  const [bookList, setBookList] = useState<BookListItem[]>([]);
  const _getBookList = async () => {
    // 接続確認のため、固定値 '1'
    setBookList(await getBookList("1"));
  };
  useEffect(() => {
    _getBookList();
  }, []);
  return (
    <>
      {/* tanaita に booklist を渡す */}
      <div>
        {bookList.map((data) => (
          <>
            <div>{data.id}</div>
            <div>{data.title}</div>
          </>
        ))}
      </div>
    </>
  );
};
