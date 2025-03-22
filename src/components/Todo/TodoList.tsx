import React from 'react';
import { List, Button, Checkbox } from 'antd';
import { Todo } from '../../atoms/todoAtoms';

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggleComplete }) => {
  // Sort todos by createdAt in descending order
  const sortedTodos = [...todos].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <List
      bordered
      dataSource={sortedTodos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button type="link" onClick={() => onRemove(todo.id)}>
              Remove
            </Button>,
            ]}
            >
            <Button
            type="text"
            icon={todo.completed ? '✔️' : '○'}
            onClick={() => onToggleComplete(todo.id)}
            size='small'
            style={{ border: 'none' }}
            />
          <div>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
            <div style={{ fontSize: '12px', color: 'gray' }}>
              Created: {new Date(todo.createdAt).toLocaleString()}
              {todo.completedAt && (
                <div>Completed: {new Date(todo.completedAt).toLocaleString()}</div>
              )}
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default TodoList;