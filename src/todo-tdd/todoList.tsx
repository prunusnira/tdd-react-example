import TodoItem from "./todoItem";

type TodoType = {
    id: number;
    text: string;
    done: boolean;
};

type Props = {
    todos: Array<TodoType>;
    onToggle?: (id: number) => void;
    onRemove?: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
    return (
        <ul>
            {todos.map((x) => (
                <TodoItem
                    todo={x}
                    key={x.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
};

export default TodoList;
