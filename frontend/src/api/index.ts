import { getBookList as __prodGetBookList, __mockGetBookList } from "./BookAPI";

let getBookList = __prodGetBookList;

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  getBookList = __mockGetBookList;
}

export { getBookList };
