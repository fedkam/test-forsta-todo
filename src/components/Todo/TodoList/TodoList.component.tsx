import React from "react";
import { TodoItem } from "../TodoItem";
import styled from "./TodoList.module.scss";
import { useSelectorTyped } from "../../../store/utils/reduxHooks";

export const TodoList = () => {
  const { todos } = useSelectorTyped((state) => state?.todos);
  return (
    <div className={styled.todoList} role="listbox">
      {todos.map((item, i) => (
        <TodoItem data-testid="todoItem" key={i} {...item} />
      ))}
    </div>
  );
};
