import React from "react";
import { HeaderTodo } from "./HeaderTodo.component";
import { renderWithProviders } from "../../../utils/testUtils";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("HeaderTodo", () => {
  test("visible dom elements", async () => {
    renderWithProviders(<HeaderTodo />);
    const logo = screen.getByTestId("logo");
    const inputField = screen.getByTestId("inputField");
    const addButton = screen.getByTestId("addButton");
    expect(logo).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
  test("default input placeholder ", async () => {
    renderWithProviders(<HeaderTodo />);
    const inputField = screen.getByPlaceholderText("Введите название");
    expect(inputField).toBeInTheDocument();
  });
  test("edit input", async () => {
    renderWithProviders(<HeaderTodo />);
    const editInputValue = "Новая задача";
    const inputField = await screen.getByPlaceholderText("Введите название");
    expect(screen.queryByDisplayValue(editInputValue)).toBeNull();
    fireEvent.change(inputField, { target: { value: editInputValue } });
    expect(screen.queryByDisplayValue(editInputValue)).toBeInTheDocument();
  });
});
