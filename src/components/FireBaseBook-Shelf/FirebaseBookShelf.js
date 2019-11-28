import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { bookshelfConfig } from "../firebase/keys";
import "./book.css";

firebase.initializeApp(bookshelfConfig);
const dbRef = firebase.database().ref();

export default class FirebaseBookShelf extends Component {
  state = {
    books: [],
    currentUserInput: ""
  };

  componentDidMount() {
    // connect app to firebase in componentDidMount

    // fuck shitty ass fucking garbage function decor
    dbRef.on("value", snapshot => {
      const database = snapshot.val();
      const updateBooksArray = [];
      for (let key in database) {
        updateBooksArray.push({
          bookId: key,
          bookTitle: database[key]
        });
      }
      this.setState({
        books: updateBooksArray
      });
    });

    // listen on the dbRef for when the value of the database changes
    // whenever it does - update our state
  }

  handelOnChange = e => {
    this.setState({
      currentUserInput: e.target.value
    });
  };

  handelOnSubmit = e => {
    e.preventDefault();
    let booksToBeUpdated = this.state.currentUserInput;
    // add 'bookToBeUpdated to firebase, so that the dbRef listener will be called and it will update state and cause the ap to re-render
    if (booksToBeUpdated !== "") {
      dbRef.push(booksToBeUpdated);
      this.setState({
        currentUserInput: ""
      });
    }
  };

  handleOnDelete = bookIdToDelete => {
    const filteredBookArr = this.state.books.filter(book => {
     return book.bookId !== bookIdToDelete;
    });

    this.setState({
        books: filteredBookArr
    })

    dbRef.child(bookIdToDelete).remove();

};

  render() {
    return (
      <div>
        <h1>Rainy Day Bookshelf 🌧</h1>
        <ul>
          {this.state.books.map((book) => {
            return (
              <li key={book.bookId}>
                {book.bookTitle}
                <span
                  className="deleteBook"
                  onClick={() => this.handleOnDelete(book.bookId)}
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handelOnSubmit}>
          <label htmlFor="bookTitle"></label>
          <input
            id="bookTitle"
            type="text"
            value={this.state.currentUserInput}
            onChange={this.handelOnChange}
          />
          <button type="submit">Add Book To the List</button>
        </form>
      </div>
    );
  }
}
