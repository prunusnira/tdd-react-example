import { useState } from "react";
import TodoItemType from "./todoItemType";

const useTodo = () => {
    const [todoList, setTodoList] = useState(new Map<number, TodoItemType>());

    const onInsert = (s: string) => {
        todoList.set(todoList.size, {
            id: todoList.size,
            text: s,
            done: false,
        });
        setTodoList(todoList);
    };

    return {
        todoList,
        onInsert,
    };
};

export default useTodo;
