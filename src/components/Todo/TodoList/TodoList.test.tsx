import React from "react";
import { TodoList } from "./TodoList.component";
import { renderWithProviders } from "../../../utils/testUtils";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createTodo } from "../../../store/todoSlice";

describe("TodoList", () => {
  test("visible dom element", async () => {
    renderWithProviders(<TodoList />);
    const todoList = screen.getByRole("listbox");
    expect(todoList).toBeInTheDocument();
  });

  test("check task list", async () => {
    const { store } = renderWithProviders(<TodoList />);
    store.dispatch(createTodo({ id: "666", text: "гитара", done: false }));
    store.dispatch(createTodo({ id: "777", text: "балалайка", done: false }));
    const { todos } = store.getState()?.todos;
    const testingList = screen
      .getAllByTestId("editField")
      .map((el) => el.textContent);
    const todosTextList = todos.map((el) => el.text);
    expect(testingList).toEqual(todosTextList);
  });
});
