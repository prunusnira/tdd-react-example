import React, { useEffect, useState } from "react";

type Props = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
    onToggle?: (id: number) => void;
    onRemove?: (id: number) => void;
};

const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
    const [lineDeco, setLineDeco] = useState("");
    useEffect(() => {
        todo.done ? setLineDeco("line-through") : setLineDeco("none");
    }, [todo]);

    return (
        <li>
            <span
                style={{ textDecoration: lineDeco }}
                onClick={() => onToggle && onToggle(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => onRemove && onRemove(todo.id)}>삭제</button>
        </li>
    );
};

export default TodoItem;
