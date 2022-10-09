import React from "react";
import { TodoItem } from "./TodoItem.component";
import { renderWithProviders } from "../../../utils/testUtils";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TodoList", () => {
  test("visible dom elements", async () => {
    renderWithProviders(<TodoItem id="0" text="заметка" done={false} />);
    const toggleCheckbox = screen.getByTestId("toggleCheckbox");
    const editField = screen.getByTestId("editField");
    const closeButton = screen.getByTestId("closeButton");
    expect(toggleCheckbox).toBeInTheDocument();
    expect(editField).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
});
