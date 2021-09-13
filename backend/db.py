import psycopg2
import psycopg2.extras
from urllib.parse import urlparse


# DATABASE_URL = os.environ.get("DATABASE_URL")
DATABASE_URL = "postgres://oarffjzrgjjdfz:9b3a6755aa9e0c3b86a494b0b59bbcf73d742e871253d041160359fe19191dc8@ec2-3-222-11-129.compute-1.amazonaws.com:5432/ddek8un6jogduc"


def connect_DB():
    db_info = urlparse(DATABASE_URL)

    conn = psycopg2.connect(
        database=db_info.path[1:],
        user=db_info.username,
        password=db_info.password,
        host=db_info.hostname,
        port=db_info.port
    )
    return conn


def booklist_query(user_id: int) -> list:
    """
    引数: user_id, 返り値: user_idが持つ本のリスト
    """
    conn = connect_DB()

    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
        query = "SELECT book.title, book.ISBN FROM purchasedBook, book WHERE purchasedBook.userid = %s AND book.ISBN = purchasedBook.ISBN;"
        cur.execute(query, str(user_id))
        d = []

        for row in cur:
            d.append(dict(row))
    return d


def bookdata_query(user_id: int, book_id: int) -> list:
    """
    引数: user_id, book_id, 返り値: user_idが持つ本book_idの情報
    """
    conn = connect_DB()

    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
        query = "SELECT book.title, book.ISBN, book.image, book.author, book.page, book.description, purchasedBook.hasRead, purchasedBook.purchased_store, purchasedBook.purchased_date FROM purchasedBook, book WHERE purchasedBook.userid = %s AND book.ISBN = %s;"
        cur.execute(query, (str(user_id), book_id))
        d = []

        for row in cur:
            d.append(dict(row))
    return d


if __name__ == "__main__":
    arr = booklist_query(1)
    print("---book list---")
    print(arr)
    print()

    d = bookdata_query(1, "9784780802047")
    print("---book info---")
    print(d)

# TODO purchased_storeをurlに変更する
