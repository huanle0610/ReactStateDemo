import React from 'react';
import { useAtom } from 'jotai';
import {
  todosAtom,
  incompleteTodosAtom,
  completedTodosAtom,
} from '../atoms/todoAtoms';
import AddTodoForm from '../components/Todo/AddTodoForm';
import TodoList from '../components/Todo/TodoList';
import { addTodo, removeTodo, toggleTodo } from '../utils/todoHelpers';
import withRenderCount from '../hoc/withRenderCount';

const TrackedTodoList = withRenderCount(TodoList); // Wrap TodoPage with the HOC

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [incompleteTodos] = useAtom(incompleteTodosAtom);
  const [completedTodos] = useAtom(completedTodosAtom);

  const completedCount = completedTodos.length;
  const totalCount = todos.length;
  const addedCount = incompleteTodos.length;

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

  return (
    <div style={{ padding: '16px' }}>
      <h1 className="text-2xl font-bold mb-4">
        Todo App
        <span
          style={{ fontSize: '12px', fontWeight: 'normal', marginLeft: '8px' }}
        >
          <span>Todo:</span> {addedCount} <span>Complete:</span>{' '}
          {completedCount} <span>Total:</span> {totalCount}
        </span>
      </h1>

      <AddTodoForm addTodo={handleAddTodo} />
      <TrackedTodoList
        todos={todos}
        onRemove={handleRemoveTodo}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default TodoPage;
