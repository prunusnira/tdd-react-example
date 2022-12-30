import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./react-component/profile";
import Counter from "./react-component/counter";
import TodoForm from "./todo-tdd/todoForm";
import TodoList from "./todo-tdd/todoList";
import useTodo from "./todo-tdd/useTodo";

function App() {
    const { todoList, onInsert, onToggle, onRemove } = useTodo();
    return (
        <>
            <Profile username="me" name="test" />
            <Counter />
            <TodoForm onInsert={onInsert} />
            <TodoList
                todos={todoList}
                onToggle={onToggle}
                onRemove={onRemove}
            />
        </>
    );
}

export default App;
