import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./react-component/profile";
import Counter from "./react-component/counter";
import TodoForm from "./todo-tdd/todoForm";
import TodoList from "./todo-tdd/todoList";

function App() {
    return (
        <>
            <Profile username="me" name="test" />
            <Counter />
            <TodoForm />
            <TodoList todos={[]} />
        </>
    );
}

export default App;
