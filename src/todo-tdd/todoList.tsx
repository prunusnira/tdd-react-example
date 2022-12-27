import TodoItem from "./todoItem";
import TodoItemType from "./todoItemType";

type Props = {
    todos: Map<number, TodoItemType>;
    onToggle?: (id: number) => void;
    onRemove?: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
    return (
        <ul>
            {Array.from(todos.values()).map((x) => (
                <TodoItem
                    key={x.id}
                    todo={x}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
            {todos.size === 0 && "NO ITEM"}
        </ul>
    );
};

export default TodoList;
