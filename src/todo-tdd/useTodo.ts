import { useState } from "react";
import TodoItemType from "./todoItemType";

const useTodo = () => {
    const [todoList, setTodoList] = useState(new Map<number, TodoItemType>());

    return {
        todoList,
    };
};

export default useTodo;
