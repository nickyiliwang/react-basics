import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { todoAppConfig } from "../firebase/keys";
import "./todo.css";

firebase.initializeApp(todoAppConfig);
const dbRef = firebase.database().ref();

export default class Todo extends Component {
  state = {
    currentInput: "",
    todo: []
  };

  componentDidMount() {
    // when the data changes, update the state
    dbRef.on("value", data => {
      const database = data.val();

      const updateTodoArr = [];
      for (let key in database) {
        updateTodoArr.push({
          todoId: key,
          body: database[key]
        });

        this.setState({
          todo: updateTodoArr
        });
      }
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();

    this.setState({
      index: this.state.index + 1
    });

    this.setState({
      todo: this.state.todo.push({
        payload: this.state.currentInput,
        completed: false
      })
    });

    dbRef.push({
      payload: this.state.currentInput,
      completed: false
    });

    this.setState({
      currentInput: ""
    });
  };

  // handleCompleteUpdate = () => {
  //   toDoItemRef.once('value', (data) => {
  //     const targeted = data.val();
  //     toDoItemRef.update({
  //       complete: !targeted.complete
  //         })
  //   }
  //   )}

  // cool handleChange
  // handleOnChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   })
  // }

  handleOnChange = e => {
    this.setState({
      currentInput: e.target.value
    });
  };

  renderLi = () => {
    this.state.todo.map(todo => {
      return (
        <li>
          {todo.payload}
          <span>
            Check
          </span>
          <span
            className="deleteTodo"
            onClick={() => this.handleOnDelete(book.bookId)}
          >
            X
          </span>
        </li>
      );
    });

    let renderArray = [];
    for (let key in this.state.todo) {
      if (this.state.todo.hasOwnProperty(key)) {
        const singleTodo = this.state.todo[key];
        return renderArray.push(`<li key=${key}><p>${singleTodo}</p></li>`);
      }
    }
    renderArray.map(item => {
      return { item };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            id="userInput"
            type="text"
            value={this.state.currentInput}
            onChange={this.handleOnChange}
          />
        </form>
        {/* <ul>{this.renderLi()}</ul> */}
      </div>
    );
  }
}
