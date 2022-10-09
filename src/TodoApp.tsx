import React from "react";
import { TodoList } from "./components/Todo/TodoList";
import { HeaderTodo } from "./components/Todo/HeaderTodo";

import "./normalize.scss";
import "./styles.scss";

const TodoApp = () => (
  <div className="todoListApp">
    <HeaderTodo />
    <TodoList />
  </div>
);

export { TodoApp };
