import { useEffect, useState } from "react";
import { __mockGetBookList } from "../../api/BookAPI";
import { BookListItem } from "../../models/BookListItem";

export const useBookList = () => {
  const [bookList, setBookList] = useState<BookListItem[]>([]);

  const _getBookList = async () => {
    setBookList(await __mockGetBookList("1"));
  };

  useEffect(() => {
    _getBookList();
  }, []);

  return bookList;
};
