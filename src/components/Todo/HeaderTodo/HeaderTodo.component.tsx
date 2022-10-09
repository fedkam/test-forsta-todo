import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../store/todoSlice";
import styles from "./HeaderTodo.module.scss";

export const HeaderTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(createTodo({ text }));
      setText("");
    }
  };

  return (
    <>
      <div data-testid="logo" role="img" className={styles.forstaLogo} />
      <div className={styles.wrapperInput}>
        <input
          data-testid="inputField"
          className={styles.inputField}
          type="text"
          placeholder="Введите название"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          data-testid="addButton"
          className={styles.addButton}
          onClick={handleAction}
        >
          Добавить
        </button>
      </div>
    </>
  );
};
