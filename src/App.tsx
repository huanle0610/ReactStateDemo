import React from "react";
import { useAtom } from "jotai";
import { todosAtom, incompleteTodosAtom, completedTodosAtom } from "./atoms/todoAtoms";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { addTodo, removeTodo, toggleTodo } from "./utils/immerHelpers";

const App: React.FC = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [incompleteTodos] = useAtom(incompleteTodosAtom);
  const [completedTodos] = useAtom(completedTodosAtom);

  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prevTodos) => addTodo(prevTodos, newTodo));
  };

  const handleRemoveTodo = (id: number) => {
    setTodos((prevTodos) => removeTodo(prevTodos, id));
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) => toggleTodo(prevTodos, id));
  };

  // Calculate counts
  const completedCount = completedTodos.length;
  const totalCount = todos.length;
  const addedCount = incompleteTodos.length;

  return (
    <div style={{ padding: "16px" }}>
      <h1>
        Todo App
        <span style={{ fontSize: "12px" , fontWeight: "normal", marginLeft: "8px" }}>
          <span>Todo:</span> {addedCount} <span>Complete:</span>{" "}
          {completedCount} <span>Total:</span> {totalCount}
        </span>
      </h1>

      <AddTodoForm addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onRemove={handleRemoveTodo}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
