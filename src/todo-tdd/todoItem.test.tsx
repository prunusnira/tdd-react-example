import TodoItem from "./todoItem";
import { fireEvent, render } from "@testing-library/react";

describe("todo item", () => {
    type Props = {
        todo: {
            id: number;
            text: string;
            done: boolean;
        };
        onToggle?: (id: number) => void;
        onRemove?: (id: number) => void;
    };

    const sampleTodo = {
        id: 1,
        text: "TDD 배우기",
        done: false,
    };

    const setup = (todoProp?: Props) => {
        const todo = todoProp ? todoProp.todo : sampleTodo;
        const utils = render(
            <TodoItem
                todo={todo}
                onToggle={todoProp?.onToggle}
                onRemove={todoProp?.onRemove}
            />
        );
        const { getByText } = utils;
        const span = getByText(todo.text);
        const button = getByText("삭제");
        return {
            ...utils,
            span,
            button,
        };
    };

    it("ui element check", () => {
        const { span, button } = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it("line-through with done", () => {
        const { span } = setup({ todo: { ...sampleTodo, done: true } });
        expect(span).toHaveStyle("text-decoration: line-through;");
    });

    it("no line-through without done", () => {
        const { span } = setup({ todo: { ...sampleTodo } });
        expect(span).not.toHaveStyle("text-decoration: line-through;");
    });

    it("onToggle", () => {
        const onToggle = jest.fn();
        const { span } = setup({
            todo: { ...sampleTodo },
            onToggle,
        });
        fireEvent.click(span);
        expect(onToggle).toBeCalledWith(sampleTodo.id);
    });

    it("onRemove", () => {
        const onRemove = jest.fn();
        const { button } = setup({
            todo: { ...sampleTodo },
            onRemove,
        });
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(sampleTodo.id);
    });
});
