import React from "react";
import { TextArea } from "./TextArea.component";
import { renderWithProviders } from "../../utils/testUtils";

describe("TodoItem", () => {
  test("default render with data", async () => {
    renderWithProviders(<TextArea />);
  });
});
