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
        setTodoList(new Map(todoList));
    };

    const onToggle = (id: number) => {
        todoList.set(id, {
            id,
            text: todoList.get(id)!.text,
            done: !todoList.get(id)!.done,
        });
        setTodoList(new Map(todoList));
    };

    const onRemove = (id: number) => {
        todoList.delete(id);
        setTodoList(new Map(todoList));
    };

    return {
        todoList,
        onInsert,
        onToggle,
        onRemove,
    };
};

export default useTodo;
