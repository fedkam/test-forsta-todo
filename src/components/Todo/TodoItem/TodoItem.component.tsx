import {
  toggleCompleteTodo,
  deleteTodo,
  editTodo
} from "../../../store/todoSlice";
import { useDispatchTyped } from "../../../store/utils/reduxHooks";
import { TextArea } from "../../../ui-kit/TextArea";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({ id, text, done }) => {
  const dispatch = useDispatchTyped();
  return (
    <div className={styles.todoItem} role="listitem">
      <input
        data-testid="toggleCheckbox"
        className={styles.toggleCheckbox}
        type="checkbox"
        checked={done}
        onChange={() => dispatch(toggleCompleteTodo({ id }))}
      />
      <TextArea
        data-testid="editField"
        className={styles.editField}
        disabled={done}
        value={text}
        onChange={(e) =>
          dispatch(
            editTodo({ id, text: (e.target as HTMLTextAreaElement).value })
          )
        }
      />
      <span
        data-testid="closeButton"
        role="img"
        aria-label="closeButton"
        className={styles.closeButton}
        onClick={() => dispatch(deleteTodo({ id }))}
      >
        ❌
      </span>
    </div>
  );
};
