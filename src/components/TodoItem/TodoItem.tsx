import { memo } from "react";
import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export const TodoItem = memo(function TodoItem({ id, status, title }: Todo) {
  return (
    <li className={styles.todoItem}>
      <span>{title}</span>
      <div className={styles.btnGroup}>
        {status !== "todo" && (
          <Button id={id} newStatus="todo">
            To do 🐱‍🏍
          </Button>
        )}
        {status !== "inProgress" && (
          <Button id={id} newStatus="inProgress">
            In Progress ⚡
          </Button>
        )}
        {status !== "done" && (
          <Button id={id} newStatus="done">
            Done ✅
          </Button>
        )}
      </div>
    </li>
  );
});
