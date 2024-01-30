import styles from "./App.module.css";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className={styles.app}>
      <h1>Todo List</h1>
      <div className={styles.todoContainer}>
        <TodoList title="To do" status="todo" />
        <TodoList title="In progress" status="inProgress" />
        <TodoList title="Done" status="done" />
      </div>
    </div>
  );
}

export { App };
