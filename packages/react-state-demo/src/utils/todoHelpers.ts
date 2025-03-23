import { produce } from 'immer';
import { Todo } from '../atoms/todoAtoms';

export const addTodo = (todos: Todo[], newTodo: Todo) => {
  return produce(todos, (draft) => {
    draft.push(newTodo);
  });
};

export const removeTodo = (todos: Todo[], todoId: number) => {
  return produce(todos, (draft) => {
    const index = draft.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      draft.splice(index, 1);
    }
  });
};

export const toggleTodo = (todos: Todo[], todoId: number) => {
  return produce(todos, (draft) => {
    const todo = draft.find((todo) => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
      todo.completedAt = todo.completed ? Date.now() : undefined; // Handle completedAt
    }
  });
};
