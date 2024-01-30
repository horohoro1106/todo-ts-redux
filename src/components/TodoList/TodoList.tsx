import styles from "./TodoList.module.css";
import { TodoItem } from "../TodoItem/TodoItem";
import { useAppSelector } from "../../app/hooks";
import { selectByStatus } from "../../app/reducer";

type TodoListProps = {
  title: string;
  status: string;
};

export function TodoList({ title, status }: TodoListProps) {
  const todos = useAppSelector((state) => selectByStatus(state, status));

  return (
    <div className={styles.todoList}>
      <h3>{title}</h3>
      <ul>
        {todos.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            status={todo.status}
            title={todo.title}
          />
        ))}
      </ul>
    </div>
  );
}
