#!/usr/bin/python3
# coding: utf-8

from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    name = "test"
    return name + "\n"

@app.route('/user/<int:user_id>/booklist', methods=["GET"]) 
def booklist(user_id):
    
    return str(user_id)
    #return get_booklist(user_id)

@app.route('/user/<int:user_id>/book/<int:book_id>', methods=["GET"]) 
def bookdata(user_id,book_id):
    
    return str(book_id)
    #return get_bookdata(user_id,str(book_id))


if __name__ == "__main__":
    #デプロイ時にdebug=False
    app.run(debug=True, host='localhost', port=8000)

