import { atom } from 'jotai';

// Define the type for a todo item
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: number; // Timestamp for when the todo was created
  completedAt?: number; // Optional timestamp for when the todo was completed
}

// Define the todosAtom with the correct type
export const todosAtom = atom<Todo[]>([]);

export const completedTodosAtom = atom((get) => {
  const todos = get(todosAtom);
  return todos.filter((todo) => todo.completed);
});

export const incompleteTodosAtom = atom((get) => {
  const todos = get(todosAtom);
  return todos.filter((todo) => !todo.completed);
});