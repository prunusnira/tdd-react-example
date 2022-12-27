import { render } from "@testing-library/react";
import TodoItemType from "./todoItemType";
import TodoList from "./todoList";

describe("todoList", () => {
    const sampleTodos = new Map<number, TodoItemType>();
    sampleTodos.set(1, {
        id: 1,
        text: "TDD 배우기",
        done: true,
    });
    sampleTodos.set(2, {
        id: 2,
        text: "react-testing-library 사용하기",
        done: true,
    });

    it("render test", () => {
        const { getByText } = render(<TodoList todos={sampleTodos} />);
        getByText(sampleTodos.get(0)!.text);
        getByText(sampleTodos.get(1)!.text);
    });
});
